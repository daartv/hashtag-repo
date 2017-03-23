var mongoose = require('../dbConfig');
var request = require('request');


var userSchema = mongoose.Schema({
  id: String,
  username: {type: String, index: { unique: true }},
  firstName: String,
  lastName: String,
  email: {type: String, index: { unique: true }},
  password: String,
  bills: [{id: String, code: String}]
});

var User = mongoose.model('User', userSchema);

// var newUser = new User({
//   username: 'someone else',
//   firstName: 'WithD',
//   lastName: 'Notsure',
//   email: 'justsomeemail@somemail.com',
//   password: 'password',
//   bills: []
// });



module.exports = User;

