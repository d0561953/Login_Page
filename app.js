var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var registerRouter = require('./routes/signup');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/signUp', registerRouter);

app.get('/mainpages', function (req, res) {
    // res.sendFile(path.join(__dirname + '/src/view/mainpage.html'));\
    res.send("hello World");
});

app.post('/login', function (req, res) {
    //need connect to firebase

    var result = req.body;

    //get Json Data.
    var email = result.useraccount;
    //get Json Data.
    var password = result.userpassword;

    // var db = firebase.database();
    // var getRef = db.ref("/users");
    // const promiseCheckUser = new Promise((resolve, reject) => {
    //     getRef.on("value", function (snapshot) {
    //         var fbase = snapshot.val();
    //         var user = "notUser";

    //         for (let i in fbase) {
    //             var e = fbase[i].email;
    //             var c = fbase[i].password;

    //             if (e === email) {
    //                 if (c === password) {
    //                     user = "isUser";
    //                 }
    //             }
    //         }

    //         if (user == "isUser") {
    //             resolve("LOGIN IN Stuff worked!");
    //         }
    //         else {
    //             reject("LOGIN IN It's broke");
    //         }
    //     });
    // });

    // promiseCheckUser.then((response) => {
    //     console.log("response: " + response);
    //     res.send("Well Done");
    // }).catch((error) => {
    //     console.log("error: " + error);
    //     res.send("LOGIN IN ERROR");
    // })
})

app.post('/register', function (req, res) {
    //need connect to firebase
    var regJson = req.body;
    var regName = regJson.username;
    var regEmail = regJson.useremail;
    var regPassword = regJson.password;

    // var db = firebase.database();
    // var getRef = db.ref("/users");
    // const promiseFunction = new Promise((resolve, reject) => {
    //     getRef.on("value", function (snapshot) {
    //         var fbase = snapshot.val();
    //         var exist = "notreply";

    //         for (let i in fbase) {
    //             var x = fbase[i].email;
    //             if (x === regEmail) {
    //                 exist = "emailreply";
    //             }
    //         }
    //         if (exist == "notreply") {
    //             resolve("Stuff worked!");
    //         }
    //         else {
    //             reject("It broke");
    //         }
    //     });
    // });

    // promiseFunction.then((response) => {
    //     console.log("response: " + response);
    //     var ref = db.ref("/");
    //     var userRef = ref.child("users");
    //     userRef.push({
    //         name: regName,
    //         email: regEmail,
    //         password: regPassword
    //     })
    //     var result = "Account Registered !!!";
    //     res.send(result);
    // }).catch((error) => {
    //     console.log("error: " + error);
    //     var results = "Register Failed... Email already having account at here !!!";
    //     res.send(results);
    // });
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;