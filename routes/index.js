var express = require('express');
var router = express.Router();

const user = {
    id: 1,
    username: "test",
    email: "test@gmail.com"
};

/* Get Login Page. */
router.get('/', function (req, res, next) {
    res.render('signin');
});

router.post('/login', function (req, res, next) {
    jwt.sign({ user }, "secretkey", { expiresIn: "60m" }, (err, token) => {
        req.headers["authorization"] = `bearer ${token}`;
        res.redirect('/home');
        // res.json({
        //     token
        // });
    });
});

module.exports = router;
