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

router.get('/packages', function(req, res, next) {
  res.render('packages', { title: 'Groovy - Packages' });
});

router.get('/support', function(req, res, next) {
  res.render('support', { title: 'Groovy - Support' });
});

router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'Groovy - Signin' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Groovy - Signup' });
});

router.get('/signup-data', function(req, res, next) {
  res.render('signup-data', { title: 'Groovy - Signup' });
});

router.get('/signup-package', function(req, res, next) {
  res.render('signup-package', { title: 'Groovy - Signup' });
});

router.get('/signup-installdate', function(req, res, next) {
  res.render('signup-installdate', { title: 'Groovy - Signup' });
});

router.get('/signup-provide', function(req, res, next) {
  res.render('signup-provide', { title: 'Groovy - Signup' });
});

router.get('/signup-done', function(req, res, next) {
  res.render('signup-done', { title: 'Groovy - Signup' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('./dashboard/index', { title: 'Groovy - Signup' });
});

/* GET is groovy. */
router.get('/is', function(req, res, next) {
  res.render('is', { title: 'Groovy - IS' });
});
module.exports = router;
