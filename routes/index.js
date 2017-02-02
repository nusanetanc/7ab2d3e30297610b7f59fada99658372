var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
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
module.exports = router;
