var firebase = require('firebase-admin');
var serviceAccounts = require('./serviceAccount.json');

// Initialize Firebase
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccounts),
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
});

// Get a reference to the database service
var database = firebase.database();

module.exports = database;
