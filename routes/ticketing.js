var express = require('express');
var md5 = require('md5');
var router = express.Router();
var Ticketing = require('../models/ticketing');
var Sub = require('../models/subs');

/* GET detail bill one account. */
router.post('/search/id', function(req, res, next) {
  var Sub = new ()
   finnet.subid= req.body.subid;
Sub.findOne({subid: req.body.subid}, function(err, doc) {
  if (err) {
      return res.status(404).json({
          title: 'An error occured',
          respcode: '94',
          error: {message: 'Time Out'}
      });
  }
  if (!doc) {
      return res.status(404).json({
          title: 'No user found',
          respcode: '98',
          error: {message: 'User could not be found'}
      });
  }
      res.json({
         subid: doc.subid,
         subname: doc.name,
       });
    });
  });

module.exports = router;
