var express = require('express');
var passwordHash = require('password-hash');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();
var Emp = require('../models/employee');
var randomInt = require('random-int');
var damm = require('damm');
var jwt = require('jsonwebtoken');
//var session = require('express-session');
var localStorage = require('localStorage');
var jwtDecode = require('jwt-decode');
var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    pool: true,
    host: 'smtp.gmail.com', // Gmail as mail client
    port: 587,
    secureConnection: false, // use SSL
    debug: true,
    tls: {cipher:'SSLv3'},
    auth: {
        user: "web.groovyplay",
        pass: "groovyplay"
    }
});

router.get('/detailemp', function(req, res, next) {
  if(req.session.emp == "" || req.session.emp == null || req.session.emp == "0"){
    return res.status(404).json({
      title: "No user Please Signin"
    });
  } else {
    var sessionEmpId = req.session.emp;
     Emp.findOne({_id: sessionEmpId}, function(err, emps) {
       console.log( emps );
       res.json(emps);
   });
 }
});

/* Add employe */
router.post('/addemp', function(req, res, next) {
  var createpass = require('node-sid')({
 seed:'0123456789abcdefghijklmnopqrstuvwxyz',
 len:6,
 headerField:'x-node-sid'
}).create();
  var emp = new Emp();
    emp.idemployee= req.body.idemployee;
    emp.name= req.body.name;
    emp.email= req.body.email;
    emp.handphone= req.body.handphone;
    emp.password= passwordHash.generate(createpass);
    emp.accessrole= req.body.titlejob;
    emp.city= req.body.city;
    emp.photo= req.body.photo;
    emp.status= 'Enable';

    if (emp.accessrole == '1') {
      emp.departement= 'Management';
      emp.titlejob= 'Direktur';
    } else if (emp.accessrole == '2') {
      emp.departement= 'Sales';
      emp.titlejob= 'Sales Manager';
    } else if (emp.accessrole == '201') {
      emp.departement= 'Sales';
      emp.titlejob= 'Sales Supervisior';
    } else if (emp.accessrole == '202') {
      emp.departement= 'Sales';
      emp.titlejob= 'Sales Supervisior';
    } else if (emp.accessrole == '3') {
      emp.departement= 'Technical';
      emp.titlejob= 'Technical Supervisior';
    } else if (emp.accessrole == '301') {
      emp.departement= 'Technical';
      emp.titlejob= 'Field Enginner';
    } else if (emp.accessrole == '4') {
      emp.departement= 'NOC';
      emp.titlejob= 'Network Supervisior';
    } else if (emp.accessrole == '401') {
      emp.departement= 'NOC';
      emp.titlejob= 'Network Enginner';
    } else if (emp.accessrole == '5') {
      emp.departement= 'Billing';
      emp.titlejob= 'Finnace Controller';
    } else if (emp.accessrole == '501') {
      emp.departement= 'Billing';
      emp.titlejob= 'Billing';
    } else if (emp.accessrole == '502') {
      emp.departement= 'Billing';
      emp.titlejob= 'Pajak';
    } else if (emp.accessrole == '6') {
      emp.departement= 'CRO';
      emp.titlejob= 'CRO Manager';
    } else if (emp.accessrole == '601') {
      emp.departement= 'CRO';
      emp.titlejob= 'CRO';
    } else if (emp.accessrole == '7') {
      emp.departement= 'HR & GA';
      emp.titlejob= 'HR & GA Manager';
    } else if (emp.accessrole == '701') {
      emp.departement= 'HR & GA';
      emp.titlejob= 'HR';
    } else if (emp.accessrole == '702') {
      emp.departement= 'HR & GA';
      emp.titlejob= 'GA';
    } else if (emp.accessrole == '8') {
      emp.departement= 'Helpdesk';
      emp.titlejob= 'Helpdesk Spv';
    } else if (emp.accessrole == '801') {
      emp.departement= 'Helpdesk';
      emp.titlejob= 'Helpdesk';
    }else if (emp.accessrole == '0') {
      emp.departement= 'ANC';
      emp.titlejob= 'Admin';
    }
    emp.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
      var mailOptions={
      to: req.body.email,
      subject : "Akun Information System Groovy",
      text : "akun is.groovy.id anda, email :"+req.body.email+", password : "+createpass
      }
      console.log(mailOptions);
      smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
      console.log(error);
      res.end("error");
      }else{
      console.log("Message sent: " + response.message);
      res.end("sent");
      }
      });
  });
});

router.put('/putemp/:id', function(req, res, next) {

        Emp.findById(req.params.id, function(err, emp) {

            if (err)
                res.send(err);

                emp.idemployee= req.body.idemployee;
                emp.name= req.body.name;
                emp.email= req.body.email;
                emp.handphone= req.body.handphone;
                emp.city= req.body.city;
                emp.password= passwordHash.generate(req.body.password);
                emp.departement= req.body.departement;
                emp.titlejob= req.body.titlejob;
                emp.accessrole= req.body.accessrole;
                emp.photo= req.body.photo;

            // save the bear
            emp.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.put('/enableaccount/:id', function(req, res, next) {

        Emp.findById(req.params.id, function(err, emp) {

            if (err)
                res.send(err);

                emp.status= 'Enabled';

            // save the bear
            emp.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});
router.put('/disableaccount/:id', function(req, res, next) {

        Emp.findById(req.params.id, function(err, emp) {

            if (err)
                res.send(err);

                emp.status= 'Disabled';

            // save the bear
            emp.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});


router.delete('/delemp/:id', function(req, res, next) {
        Emp.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

module.exports = router;
