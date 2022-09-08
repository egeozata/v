const express = require('express');
const varyant = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
require('dotenv/config');



varyant.use('/', indexRouter);
varyant.use('/users', usersRouter);

//listening

varyant.listen(3000);
varyant.use(bodyParser.json());
varyant.use(express.urlencoded({ extended: false }));
varyant.get('/', function(req, res){
    res.send("Hello");
});

varyant.get('/users/register', function(req, res){
    res.send("Hello");
});

varyant.listen(0,() => console.log('API works'));
  

//import routes

const BookModel = require('./routes/index')
varyant.use('/index', BookModel)

const UserModel = require('./routes/users')
varyant.use('/users', UserModel)

//connect to db

mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser: true, 
    useUnifiedTopology: true},
    () => console.log('connect to db')
    )
