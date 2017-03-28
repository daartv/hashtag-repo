const express = require('express')
const session = require('express-session')
const fs = require('fs')
const bodyParser = require('body-parser')
const helper = require('./dbUtilities')

const path = require('path')
const multer = require('multer')
const axios = require('axios')
const { extractText } = require('./utilities')
const app = express()
const imgUpload = multer({dest: 'temp/'})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, '../dist')))

app.use(session({
  secret: 'Split Session Secret',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 3600000 }
  }));


/* * * * ON IMAGE UPLOAD * * * */

// app.post('/image', imgUpload.single('image'), (req, res) => {
//   const { path } = req.file
//   extractText(path)
//   .then((text) => {

//     let response = {
//       text: { text },
//       path: path
//     }

//     let response = { text }
//     res.status(200).json(response)
//   })
// })

app.post('/users/submitbill', helper.addBill);
app.get('/users/checkStatus', helper.checkUser);
app.get('/users/logout', helper.logoutUser);
app.post('/users/signup', helper.userSignUp);
app.post('/users/signin', helper.signInUser);

app.listen(9000, () => {
  console.log('Ready and listening on port 9000')
})
