const db = require('./db');

module.exports.handleSignUp = (email, password) => {
//STEP: check for duplicates
  db.saveUser({
    email,
    password
  });//ES6 way of creating objects with name same as variables
  //STEP: send welcome mail
}
