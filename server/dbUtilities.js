//request-handlers
var request = require('request');
var db = require('./dbConfig');
var User = require('./models/user');
var Bill = require('./models/bill');


exports.getBillsOwner = function(username){
  Bill.getBills(username)
  .then(function(results){
    res.send(results);
  })
  .catch(error){
    res.send('No bills existy for this user');
  }
};

exports.getMyDebts = function(username){
  Bill.getMyDebts(username)
  .then(function(results){
    res.send(results)
  })
  .catch(error){
    res.send('No debts associated with user.')
  }
}