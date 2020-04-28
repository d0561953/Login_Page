var express = require('express');
var router = express.Router();

/* Get Login Page. */
router.get('/', function (req, res, next) {
    res.render('signin');
});

module.exports = router;
