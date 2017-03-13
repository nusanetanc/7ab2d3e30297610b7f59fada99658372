var express = require('express');
var router = express.Router();
var Finnet = require('../models/finnet');
var Sub = require('../models/subs');
var Bill = require('../models/bill');

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
  Bill.findOne({sub: doc._id, status: 'Waiting For Payment'}, function(err1, bill) {
       res.json({
         subid: doc.subid,
         subname: doc.name,
         amount: bill.totalpay,
       });
     });
    });
  });


module.exports = router;
