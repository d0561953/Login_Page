const express = require('express');
const morgan = require('morgan');
var path = require('path');
const app = express();

app.use(morgan('dev'));

app.get('/', function (req,res){
    res.sendFile(path.join(__dirname + '/src/signin.html'));
})

app.get('/src/css/style.css', function (req,res){
    res.sendFile(path.join(__dirname + '/src/css/style.css'));
})

app.get('/signup_style.css', function (req,res){
    res.sendFile(path.join(__dirname + '/src/css/signup.css'));
})

app.get('/sign_in', function (req,res){
    res.send("SING_IN");
    console.log("USER_SIGN_IN");
})

app.get('/sign_up', function (req,res){
    res.send("SING_UP");
    console.log("USER_SIGN_UP");
})

app.get('/register_account', function (req,res){
    res.send("REGISTER");
    console.log("REGISTER_NEW_USER");
})

app.listen(21128, function(){
    console.log('listening on port 21128!');
})