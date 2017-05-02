var express = require('express');
var router = express.Router();
var api = express.Router();
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

router.get('/send-contact',function(req,res, next){
  var mailOptions={
    to: "cs@groovy.id",
   subject : "Contact Web Groovy",
   text : "nama : "+req.query.name+", email : "+req.query.email+", Message: "+req.query.message
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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Groovy - Home' });
});

api.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Groovy - Home' });
});


router.get('/features', function(req, res, next) {
  res.render('features', { title: 'Groovy - Features' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Groovy - About' });
});

router.get('/packages', function(req, res, next) {
  res.render('packages', { title: 'Groovy - Packages' });
});

router.get('/support', function(req, res, next) {
  res.render('support', { title: 'Groovy - Support' });
});

router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'Groovy - Signin' });
});

router.get('/forgot-password', function(req, res, next) {
  res.render('forgot-password', { title: 'Groovy - Forgot Password' });
});

router.get('/email-verification', function(req, res, next) {
  res.render('email-verification', { title: 'Groovy - Forgot Password' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup-beta', { title: 'Groovy - Signup' });
});

router.get('/signup-beta', function(req, res, next) {
  res.render('signup', { title: 'Groovy - Signup' });
});

router.get('/signup-beta/**', function(req, res, next) {
  res.render('signup', { title: 'Groovy - Signup' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Groovy - Contact' });
});

router.get('/privacy-policy', function(req, res, next) {
  res.render('privacy-policy', { title: 'Groovy - Privacy-policy' });
});

router.get('/career', function(req, res, next) {
  res.render('coming-soon', { title: 'Groovy - Career' });
});

router.get('/event', function(req, res, next) {
  res.render('event', { title: 'Groovy - Event' });
});

router.get('/event-detail', function (req,res,next) {
    res.render('event-detail', { title: 'Groovy - Event' });
});

router.get('/terms-of-use', function(req, res, next) {
  res.render('terms-of-use', { title: 'Groovy - Terms-of-use' });
});

router.get('/test', function(req, res, next) {
    res.render('test', { title: 'Groovy - My Test' });
});

/* GET is groovy. */

router.get('/is', function(req, res, next) {
  res.render('is', { title: 'Groovy - IS' });
});

router.get('/is/**', function(req, res, next) {
  res.render('is', { title: 'Groovy - IS' });
});

/* GET is groovy. */

router.get('/my', function(req, res, next) {
  res.render('my', { title: 'Groovy - MY' });
});

router.get('/my/**', function(req, res, next) {
  res.render('my', { title: 'Groovy - MY' });
});


router.get('/dashboard', function(req, res, next) {
  res.render('./dashboard/index', { title: 'Groovy - Dashboard' });
});

router.get('/dashboard/allsubscribers', function(req, res, next) {
  res.render('./dashboard/allsubscribers', { title: 'Groovy - Dashboard' });
});

router.get('/dashboard/reports', function(req, res, next) {
  res.render('./dashboard/reports', { title: 'Groovy - Dashboard' });
});

router.get('/dashboard/information', function(req, res, next) {
  res.render('./dashboard/information', { title: 'Groovy - Dashboard' });
});

router.get('/dashboard/newsubscribers', function(req, res, next) {
  res.render('./dashboard/newsubscribers', { title: 'Groovy - Dashboard' });
});

router.get('/public', function(req, res, next) {
  res.render('index', {title: 'Groovy'});
});

router.get('/public/**', function(req, res, next) {
  res.render('index', {title: 'Groovy'});
});

module.exports = router;
