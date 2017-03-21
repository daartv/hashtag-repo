//request-handlers
//multer stores img file, look into how to store reference to it in mongo
//path vs actual image
//attaches image info in two properties - request.file.path - and file
//unique pathname exists for the image
//helper function to destroy temp files

var request = require('request');
var db = require('./dbConfig');
var User = require('./models/user');
var Bill = require('./models/bills');
var Debtor = require('./models/debtor');

//Password only needed if we aren't using Facebook oAuth.
  // MVP just using no oAuth and no encrypted PW.

exports.renderIndex = function(req, res){
  res.render('index');
}

exports.signUpUser = function(req, res){
  res.render('signUp');
}

exports.loginInUser = function(req, res){
  res.render('login');
}

exports.logoutUser = function(req, res){
  req.session.destroy(function(){
    res.redirect('/login');
  })
};

exports.userBills = function(req, res){
  exports.getBillsOwner(req.session.username);
};


exports.signInUser = function(req, res) {
  var username = req.body.username;
  var pw = req.body.password;

  if(req.session.username){
    res.redirect('/profile/' + req.session.username);
  }

   User.findOne({username: username, password: pw})
   .exec(function(err, user){
    if(user === null) {
      res.redirect('/login');
    } else {
      req.session.username = user.username;
      req.session.userID = user.id;
      res.redirect('/profile/' + req.session.username);
    }
   })
};


exports.userSignUp = function(req, res) {
  var username = req.body.username;
  var email = req.body.email;
  // console.log('REQUEST', req)
  console.log('USER', User);
  console.log('BILLS', Bill);
  console.log('DEBTOR', Debtor);
   User.findOne({username: username, email: email})
   .exec(function(err, user){
    if(user === null) {
      var newUser = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        bills: []
      });
      newUser.save(function(err, newUser){
        if(err){
          res.status(500).send(err);
        } else {
          // req.session.username = newUser.username;
          // req.session.userID = newUser.id;
          console.log('hello');
        }
      });
    } else {
      console.log('Account already exists.');
      res.redirect('/login');
    }
   })
};


exports.getBillsOwner = function(username){
  Bill.find({owner: username})
  .exec(function(error, bills){
    if(error){
      throw error;
    }
    res.status(200).send(bills);
  })
};

/*===================================
Add Bill Helpers
====================================*/

exports.selectDebtors = function(debtors){
  return debtors.map(debtor => {
    return Debtor.findOne({email: debtor.email})
      .exec(function(err, debt){
      if(err){
        var newDebtor = new Debtor({
        firstName: debtor.fName,
        lastName: debtor.lName,
        email: debtor.email
      });
        newDebtor.save(function(err, newDebtor){
          if(err){
            res.status(500).send(err)
          }
          return newDebtor;
        })
      } else{
        return debt.id;
      }
    })
  });
}

//this is quite complex actually...
  //so, if we do have a debtors collection, it would allow us to store ids of debtors rather than inserting all info... that said, info in each is only 6 fields maybe...
exports.addBill = function(req, res) {

  if(req.session.username === null){
    res.redirect('/login');
  }

  exports.selectDebtors(req.body.debtors)

  .then(function(debtorIds){
    var billDebtors = debtorIds.map((id, ind) => {
      return {
      id: id,
      owed: req.body.debtors[ind].owed,
      paidAmount: req.body.debtors[ind].paid
    }
    });

    var newBill = new Bill({
      name: req.body.billName,
      owner: req.session.username,
      code: req.body.code,
      amount: req.body.totalAmount,
      debt: req.body.totalAmount,
      image: '',
      debtors: [billDebtors]
    });

    newBill.save(function(err, newBill){
      if(err){
        res.status(500).send(err)
      }
      return newBill
    })
    .exec(function(err, newBill){
       User.aggregate([
         { $match: { username: req.body.username } },
         { $push: {bills: newBill.id} }
       ])
    .exec(function(err, user){
      if(err){
        res.status(500).send(err)
      } else {
      // exports.getBillsOwner(user.username)
        res.send(user);
      }
    });
    });
  });
};
