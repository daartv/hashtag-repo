var mongoose = require('mongoose');
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



module.exports = User;

