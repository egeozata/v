const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller')
const Middleware = require('../middleware/auth')

router.post('/register', UserController.register)
router.post('/login', Middleware, UserController.login)


module.exports = router;
