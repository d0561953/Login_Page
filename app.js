const express = require('express');
const morgan = require('morgan');
var path = require('path');
var firebase = require("firebase-admin");
var serviceAccounts = require("./src/config/serviceAccount.json");
var bodyParser = require('body-parser');

var http = require("http");
var url = require("url");
var qs = require("querystring");
var fs = require("fs");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

firebase.initializeApp({
    credential:firebase.credential.cert(serviceAccounts),
    databaseURL: "https://testfirebase-1711f.firebaseio.com/"
})

//Go to Login Page.
app.get('/', function (req,res){
    res.sendFile(path.join(__dirname + '/src/signin.html'));
})

//Go to Register Page.
app.get('/sign_up', function (req,res){
    res.sendFile(path.join(__dirname + '/src/signup.html'));
})

app.get('/mainpages', function (req,res){
    res.sendFile(path.join(__dirname + '/src/mainpage.html'));
})

//Get data.
app.get('/src/css/style.css', function (req,res){
    res.sendFile(path.join(__dirname + '/src/css/style.css'));
})
//Get data.
app.get('/javascript/script.js', function (req,res){
    res.sendFile(path.join(__dirname + '/src/javascript/script.js'));
})
//Get data.
app.get('/img-01.png', function (req,res){
    res.sendFile(path.join(__dirname + '/src/images/img-01.png'));
})
//Get data.
app.get('/css/font-awesome.min.css', function (req,res){
    res.sendFile(path.join(__dirname + '/src/fonts/font-awesome-4.7.0/css/font-awesome.min.css'));
})

//Get data.
app.get('/favicon.ico', function (req,res){
    res.sendFile(path.join(__dirname + '/src/images/icons/favicon.ico'));
})

//Get data.
app.get('/vendor/bootstrap/css/bootstrap.min.css', function (req,res){
    res.sendFile(path.join(__dirname + '/src/vendor/bootstrap/css/bootstrap.min.css'));
})

//Get data.
app.get('/vendor/:file/:filename', function (req,res){
    var file = req.params.file;
    var filename = req.params.filename;
    res.sendFile(path.join(__dirname + '/src/vendor/' + file + '/' + filename));
})

app.post('/login', function (req, res){
    //need connect to firebase

    var result = req.body;
    
    //get Json Data.
    var email = result.useraccount;
    //get Json Data.
    var password = result.userpassword;

    var db = firebase.database();
    var getRef = db.ref("/users");
    const promiseCheckUser = new Promise((resolve, reject) => {
        getRef.on("value", function(snapshot){
            var fbase = snapshot.val();
            var user = "notUser";

            for(let i in fbase) {
                var e = fbase[i].email;
                var c = fbase[i].password;
                
                if(e === email) {
                    if(c === password){
                        user = "isUser";
                    }
                }

            }

            if(user == "isUser"){
                resolve("LOGIN IN Stuff worked!");
            }
            else{
                reject("LOGIN IN It's broke");
            }
        });
    });

    promiseCheckUser.then((response) => {
        console.log("response: " + response);
        res.send("Well Done");
    }).catch((error) => {
        console.log("error: " + error);
        res.send("LOGIN IN ERROR");
    })
})

app.post('/register', function (req, res){
    //need connect to firebase
    var regJson = req.body;
    var regName = regJson.username;
    var regEmail = regJson.useremail;
    var regPassword = regJson.password;

    var db = firebase.database();
    var getRef = db.ref("/users");
    const promiseFunction = new Promise((resolve, reject) => {
        getRef.on("value", function(snapshot){
            var fbase = snapshot.val();
            var exist = "notreply";

            for(let i in fbase){
                var x = fbase[i].email;
                if(x === regEmail){
                    exist = "emailreply";
                }
            }
            if(exist == "notreply"){
                resolve("Stuff worked!");
            }
            else{
                reject("It broke");
            }
        });
    });

    promiseFunction.then((response) => {
        console.log("response: " + response);
        var ref = db.ref("/");
        var userRef = ref.child("users");
        userRef.push({
            name: regName,
            email: regEmail,
            password: regPassword
        })
        var result = "Account Registered !!!";
        res.send(result);
    }).catch((error) => {
        console.log("error: " + error);
        var results = "Register Failed... Email already having account at here !!!";
        res.send(results);
    });
})

app.listen(21128, function(){
    console.log('listening on port 21128!');
})