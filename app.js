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

app.get('/javascript/script.js', function (req,res){
    res.sendFile(path.join(__dirname + '/src/javascript/script.js'));
})

app.get('/img-01.png', function (req,res){
    res.sendFile(path.join(__dirname + '/src/images/img-01.png'));
})

app.get('/css/font-awesome.min.css', function (req,res){
    res.sendFile(path.join(__dirname + '/src/fonts/font-awesome-4.7.0/css/font-awesome.min.css'));
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
    console.log("REGISTER_USER");
    // res.render('src/signup');
    res.sendFile(path.join(__dirname + '/src/signup.html'));
})

app.listen(21128, function(){
    console.log('listening on port 21128!');
})