var firebase = require('firebase');
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCaUW-wwvDkvZft0WPWW4YVR448NZc1skA",
    authDomain: "testfirebase-1711f.firebaseapp.com",
    databaseURL: "https://testfirebase-1711f.firebaseio.com",
    projectId: "testfirebase-1711f",
    storageBucket: "testfirebase-1711f.appspot.com",
    messagingSenderId: "350017973878"
  };
  firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
module.exports = {
    database
}