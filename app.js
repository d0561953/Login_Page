const express = require('express');
const morgan = require('morgan');
var path = require('path');
const app = express();

app.use(morgan('dev'));

app.get('/', function (req,res){
    res.sendFile(path.join(__dirname + '/src/signin.html'));
})

app.get('/sign_in', function (req,res){
    //sign in function
    console.log("USER_SIGN_IN");
})

app.get('/sign_up', function (req,res){
    //Go to Sign Up Page.
    res.sendFile(path.join(__dirname + '/src/signup.html'));
})

app.get('/register_account/:name/:email/:password', function (req,res){
    //Register function.
    var username = req.params.name;
    var useremail = req.params.email;
    var pass = req.params.password;
    var result = "username: " + username + "useremail: " + useremail + "password: " + pass;
    res.send(result);
})

//Get data
app.get('/style.css', function (req,res){
    res.sendFile(path.join(__dirname + '/src/css/style.css'));
})

app.get('/script.js', function (req,res){
    res.sendFile(path.join(__dirname + '/src/javascript/script.js'));
})

app.get('/css/font-awesome.min.css', function (req,res){
    res.sendFile(path.join(__dirname + '/src/fonts/font-awesome-4.7.0/css/font-awesome.min.css'));
})

app.get('/img-01.png', function (req,res){
    res.sendFile(path.join(__dirname + '/src/images/img-01.png'));
})

app.listen(21128, function(){
    console.log('listening on port 21128!');
})