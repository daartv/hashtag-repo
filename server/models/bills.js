//bills schema
var mongoose = require('../temp/dbConfig');
var request = require('request');


var billSchema = mongoose.Schema({
  id: String,
  name: String,
  owner: String,
  code: String,
  amount: Number,
  debt: Number,
  image: {data: Buffer, contentType: String},
  debtors: [{id: String, owed: Number, paidAmount: Number}]
});

var Bill = mongoose.model('Bill', billSchema);

// var newBill = new Bill({
//   name: 'Restaurant Bill',
//   owner: 'Steve',
//   code: 'Food',
//   amount: 250.00,
//   debt: 250.00,
//   image: '',
//   debtors: []
// })
// newBill.save();

// Bill.getmyDebts = function(username){
//   return User.find({username: username})
//   .then(function(userId){
//     return Bill.findAll({ debtors: { $elemMatch: { id: userId } } } )
//   })
// };

module.exports = Bill;