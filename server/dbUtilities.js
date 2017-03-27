//request-handlers
//multer stores img file, look into how to store reference to it in mongo
//path vs actual image
//attaches image info in two properties - request.file.path - and file
//unique pathname exists for the image
//helper function to destroy temp files

const request = require('request');
const db = require('./dbConfig');
const path = require('path')
const User = require('./models/user');
const Bill = require('./models/bills');
const Debtor = require('./models/debtor');
const fs = require('fs');

// const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');

//Password only needed if we aren't using Facebook oAuth.
  // MVP just using no oAuth and no encrypted PW.

// exports.renderIndex = function(req, res){
//   res.render('index');
// }

// exports.signUpUser = function(req, res){
//   res.render('signUp');
// }

// exports.loginInUser = function(req, res){
//   res.render('login');
// }

exports.checkUser = function(req, res){ 
  let username = req.session.username;
  console.log('session', username);
  if(username){ 
    User.findOne({username: username})
      .exec(function(err, user){
        if(user === null) {
          // res.redirect('/login');
          res.sendStatus(500);
        } else {
          req.session.username = user.username;
          req.session.userID = user.id;
          exports.createUserStorage(user.username);
          // res.redirect('/profile/' + req.session.username);
          res.send({signedIn: true, user: user});
        }
       })
    // res.send({signedIn: true, user: username});
  } else{
    res.sendStatus(500);
  }
}


exports.logoutUser = function(req, res){
  let username = req.session.username;
  if(username !== null){
    let userDir = __dirname + '/' + username;
    fs.unlink(userDir, function(err){
      if(err){
        console.log('error');
      }
      req.session.destroy(function(){
      res.redirect('/login');
  })
    })
  }
    else {
      res.redirect('/login');
    }
};

exports.userBills = function(req, res){
  exports.getBillsOwner(req, res);
};


exports.signInUser = function(req, res) {
  let username = req.body.username;
  let pw = req.body.password;


  // if(req.session.username){
  //   res.redirect('/profile/' + req.session.username);
  // }

   User.findOne({username: username, password: pw})
   .exec(function(err, user){
    if(user === null) {
      console.log('no user  found on signin');
      // res.redirect('/login');
      res.sendStatus(500);
    } else {
      console.log('user  found on signin', user);
      req.session.username = user.username;
      req.session.userID = user.id;
      exports.createUserStorage(user.username);
      // res.redirect('/profile/' + req.session.username);
      res.send(user);
    }
   })
};


exports.userSignUp = function(req, res) {
  console.log('GOT TO SIGN UP')
  let username = req.body.username;
  let email = req.body.email;

   User.findOne({username: username, email: email})
   .exec(function(err, user){
    if(user === null) {
      let newUser = new User({
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
          req.session.username = newUser.username;
          req.session.userID = newUser.id;
          res.status(200).send(newUser);
        }
      });
    } else {
      console.log('Account already exists.');
      res.redirect('/login');
    }
   })
};


exports.getBillsOwner = function(req, res){
  Bill.find({owner: req.session.username})
  .exec(function(error, bills){
    if(error){
      throw error;
    }
    exports.createBillImages(req.session.username, bills);
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
        let newDebtor;
        if(debt === null){
          newDebtor = new Debtor({
            firstName: debtor.fName,
            lastName: debtor.lName,
            email: debtor.email
          });
          newDebtor.save(function(err, newdebtor){
            if(err){
              res.status(500).send(err)
            }
            return newdebtor;
          })
        } else {        
          return debt;
        }
      })
  });

}

// on addBill ajax request, please create an object with bill property and  username
exports.addBill = function(req, res) {

  /** TEST DATA **
  var testBill = {
    name: 'Restaurant Bill',
    owner: 'Steve',
    code: 'Food',
    date: Date.now(),
    amount: 250.00,
    debt: 250.00,
    image: '',
    debtors: [{fName: 'Caspar', lName: 'Jones', email: 'cj@hotmail.com', owed: 100}]
  };
  
  req.body = {bill: testBill};
  req.body.username = 'user7';
  req.session = {username:'Steve'};
   
  ** TEST DATA **/

  let debtors = exports.selectDebtors(req.body.bill.debtors);
  Promise.all(debtors)
  .then(values => {
    let debtorArr = [];
    const debtorsInfo = req.body.bill;
    // adding new properties to the debtors objects
    for ( var i = 0; i < values.length; i++ ) {
      debtorArr.push({debtorId: values[i]._id, owed: debtorsInfo.debtors[i].owed, paidAmount: 0});
    }

    let newBill = new Bill({
      name: debtorsInfo.billName,
      owner: req.session.username,
      code: debtorsInfo.code,
      amount: debtorsInfo.totalAmount,
      debt: debtorsInfo.totalAmount,
      image: 'http://www.pngpix.com/wp-content/uploads/2016/04/Iphone-PNG-Image.png',
      debtors: debtorArr
    });
    
    newBill.save()
    .then(newbill => {
      User.findOne({ username: req.body.username }).exec()
      .then(user => {
        user.bills.push({billId: newbill._id, code: newbill.code});
        user.save()
          .then(user => {
            console.log('last cl: user', user);
            fs.unlink('./temp/' + req.file.billPhoto.path);
            res.send(user);
          })
          .catch(err => {
            console.log('user.bills.push error:', err);
            res.sendStatus(500);
          });
      })
      .catch(err => {
        console.log('User.findOne error:', err);
        res.sendStatus(500);
      });
    })
    .catch(err => {
      console.log('newBill.save error:', err);
      res.sendStatus(500);
    });
  })
  .catch(err => {
    console.log('newBill.save error:', err);
    res.sendStatus(500);
  });
}

//Create a temp directory and store bill images for user once they sign in
exports.createUserStorage = function(username){
  let newDir = path.join(__dirname, '../dist') + '/' + username;
  if (!fs.existsSync(newDir)){ //checks if dir exist
    fs.mkdirSync(newDir);
  }
}

exports.createBillImages = function(user, bills){
  let targetDir = path.join(__dirname, '../dist') + '/' + user;
  bills.forEach(bill => {
    let imgPath = targetDir + '/' + bill.name + '.jpg';
    console.log(bill.image.data);
    let imageData = bill.image.data;
    fs.writeFile(imgPath, imageData, 'base64', function(err){
      if(err){
        throw err
      }
    })
  })
}
