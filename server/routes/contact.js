require('dotenv').config();
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


var transport = {
   service: 'Gmail',
    secure: true,
    auth: {
        user: 'hotellasestrellas1989@gmail.com',
        pass: 'ciempo73)'
    }
  }


var transporter = nodemailer.createTransport(transport)

/* var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    Username: 'hotelasestrellas19@gmail.com',
    Password: 'ciempo73)'
  }
}));
*/





transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var booking = req.body.booking
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n booking: ${booking} \n message: ${message} `

  var mail = {
    from: name,
    to: 'hotellasestrellas1989@gmail.com',
    subject: 'New Message from Contact Form',
    text: content
  }


  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

const app = express()
app.use(express.json())

module.exports = router;