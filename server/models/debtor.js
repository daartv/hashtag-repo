//debtor schema
// var mongoose = require('../server/node_modules/mongoose');
var mongoose = require('../dbConfig');
var request = require('request');

var debtorSchema = mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String
});

var Debtor = mongoose.model('Debtor', debtorSchema);

//user methods...
  //maybe a method to check if user exists
  //add bill to account
  //modify bill

  //get all user bills - in bills schema..



module.exports = Debtor;