var express = require('express');
var router = express.Router();
var Finnet = require('../models/finnet');
var Sub = require('../models/subs');
var Bill = require('../models/subs');

/* GET detail bill one account. */
router.post('/inqreq/', function(req, res, next) {
Sub.findOne({subid: req.body.subid}, function(err, doc) {
  if (err) {
      return res.status(404).json({
          title: 'An error occured',
          error: err
      });
  }
  if (!doc) {
      return res.status(404).json({
          title: 'No user found',
          error: {message: 'User could not be found'}
      });
  }
       res.json({
         subid: doc.subid,
         subname: doc.name
       });
   });
});


module.exports = router;
