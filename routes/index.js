const express = require('express');
const router = express.Router();
const BookController = require('../controllers/book.controller')
const Middleware = require('../middleware/auth');
const varyantAuthorModel = require('../varyant.models/varyant.author.model');

router.get('/getbooks', Middleware, BookController.list)
router.post('/book', Middleware, BookController.insert)



module.exports = router;
