var express = require('express');
var router = express.Router();
var api = express.Router();

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

router.get('/signup/**', function(req, res, next) {
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
  res.render('coming-soon', { title: 'Groovy - Event' });
});

router.get('/terms-of-use', function(req, res, next) {
  res.render('coming-soon', { title: 'Groovy - Terms-of-use' });
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
