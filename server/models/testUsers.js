var request = require('request');
var mongoose = require('../dbConfig');
var User = require('./user');
var helpers = require('../dbUtilities');

var newUser = new User({
  username: 'someoneeeeee else',
  firstName: 'WithdsddfsdeeD',
  lastName: 'Notsdsasfdure',
  email: 'justsomdsfdeeemail@somemail.com',
  password: 'passdfsadsword',
  bills: []
});


request.body = newUser;
var test = request;
helpers.userSignUp(test);

