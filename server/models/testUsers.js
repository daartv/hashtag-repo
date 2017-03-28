var request = require('request');
var mongoose = require('../dbConfig');
var User = require('./user');
var helpers = require('../dbUtilities');

var newUser = new User({
  username: 'testuser',
  firstName: 'WithdsddfsdeeD',
  lastName: 'Notsdsasfdure',
  email: 'justsomdsfdeeemail@somemail.com',
  password: 'mycahrox2017',
  bills: []
});

request.body = newUser;
helpers.userSignUp(request);

