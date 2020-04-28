var express = require('express');
var router = express.Router();

var bookController = require('../controllers/bookController');

router.get('/', bookController.book_list);

router.post('/create', bookController.book_create)

module.exports = router;
