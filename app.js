const express = require('express');
const morgan = require('morgan');
var path = require('path');
const app = express();

app.use(morgan('dev'));

app.get('/', function (req,res){
    res.sendFile(path.join(__dirname + '/src/signin.html'));
})

app.get('/signin_style.css', function (req,res){
    res.sendFile(path.join(__dirname + '/src/css/signin.css'));
})

app.get('/signup_style.css', function (req,res){
    res.sendFile(path.join(__dirname + '/src/css/signup.css'));
})

app.listen(3000, function(){
    console.log('listening on port 3000!');
})