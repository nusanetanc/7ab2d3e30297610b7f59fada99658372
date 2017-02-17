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

/* GET is groovy. */
router.get('/is', function(req, res, next) {
  res.render('is', { title: 'Groovy - IS' });
});
module.exports = router;
