var express = require('express');
var router = express.Router();

/* Get Register Page. */
router.get('/', function (req, res, next) {
    res.render('signup');
});

module.exports = router;
