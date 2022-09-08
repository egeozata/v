const User = require('../varyant.models/varyant.user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const randomix = require('randomix')

exports.register = async(req, res, next) => {
    const sayi = randomix.generate({
        length: 6,
        charset: 'numeric'
    });
    try {
        const {email, name, surname, password} = req.body;

        if (!(email && password)) {
            res.status(400).json({
                status: false,
                message: 'All input is required for create user.'
            });
        }

        const oldUser = await User.findOne({ 'email': email });

        if (oldUser) {
            return res.status(300).json({
                status: false,
                message: 'User Already Exist. Please Login.'
            });
        }

        encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name: name,
            surname: surname,
            email: email.toLowerCase(),
            password: encryptedPassword,
        });

        const token = jwt.sign({
                user_id: user._id,
                email
            },
            process.env.SECRET, {
                expiresIn: '24h',
            }
        );
        user.token = token;
        user.update({
            passnew: sayi
        }, (err, data) => {
            if (!err) {
                Check.check(user.email, sayi)
            } else {
                console.log(err)
            }
        })
        res.status(201).json({
            status: true,
            user: user,
            token: token
        });

    } catch (err) {
        console.log(err);
    }
}

exports.login = async(req, res, next) => {
    // Our login logic starts here
    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).json({
                status: false,
                message: 'All input is required'
            });
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email: email });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign({ user_id: user._id, email },
                process.env.SECRET, {
                    expiresIn: '2h',
                }
            );

            res.json({
                user : user,
                status: true,
                token: token
            }).then((res)=>{console.log(res)});
        } else {
            res.status(300).json({
                status: false,
                message: 'Invalid Credentials'
            });
        }

    } catch (err) {
        console.log(err);
    }
}









