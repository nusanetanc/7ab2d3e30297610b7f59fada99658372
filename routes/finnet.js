var express = require('express');
var md5 = require('md5');
var router = express.Router();
var Finnet = require('../models/finnet');
var Sub = require('../models/subs');
var Bill = require('../models/bill');

/* GET detail bill one account. */
router.post('/inqreq', function(req, res, next) {
  var finnet = new Finnet()
   finnet.typedata= req.body.typedata;
   finnet.trxid= req.body.trxid;
   finnet.trxdate= req.body.trxdate;
   finnet.gid= req.body.subid;
   finnet.signature= req.body.signature;
   finnet.secretkey= req.body.secretkey;
   hashsignature= md5(req.body.trxid+req.body.trxdate+req.body.subid+req.body.secretkey);
  if (finnet.secretkey !== 'gro0vy'){
    return res.status(404).json({
        title: 'Secret Key Not Valid',
        respcode: '93',
        error: {message: 'Secret Key Not Valid'}
    });
  }
  if (finnet.signature !== hashsignature){
    return res.status(404).json({
        title: 'signature Not Valid',
        respcode: '99',
        error: {message: 'Signature Key Not Valid'}
    });
  }
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
  Bill.findOne({sub: doc._id, status: 'Waiting For Payment'}, function(err1, bill) {
       res.json({
         typedata: 'inq_res',
         trxid: finnet.trxid,
         subid: doc.subid,
         subname: doc.name,
         amount: bill.totalpay,
         respcode: '00'
       });
     });
    });
  });

  /* GET detail bill one account. */
  router.post('/payreq', function(req, res, next) {
    var finnet = new Finnet()
    finnet.typedata= req.body.typedata;
    finnet.trxid= req.body.trxid;
    finnet.trxdate= req.body.trxdate;
    finnet.gid= req.body.subid;
    finnet.amount= req.body.amount;
    finnet.secretkey= req.body.secretkey;
    finnet.signature= req.body.signature;
    finnet.chanelpayment= req.body.chanelpayment;
    hashsignature= md5(req.body.trxid+req.body.trxdate+req.body.subid+req.body.amount+req.body.secretkey);
   if (finnet.secretkey !== 'gro0vy'){
     return res.status(404).json({
         title: 'Secret Key Not Valid',
         respcode: '93',
         error: {message: 'Secret Key Not Valid'}
     });
   }
   if (finnet.signature !== hashsignature){
     return res.status(404).json({
         title: 'signature Not Valid',
         respcode: '99',
         error: {message: 'Signature Key Not Valid'}
     });
   }
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
    Bill.findOne({sub: doc._id, status: 'Waiting For Payment'}, function(err1, bill) {
      if(bill.totalpay ==! finnet.amount){
        return res.status(404).json({
            title: 'Invalid Amount',
            respcode: '97',
            error: {message: 'Invalid Amount'}
        });
      }
      if(finnet.chanelpayment == "01"){
        namechanel: 'Indomaret'
      } else if (finnet.chanelpayment == "02") {
        namechanel: 'Alfamart'
      } else {
        return res.status(404).json({
            title: 'Invalid Chanel Payment',
            respcode: '92',
            error: {message: 'chanel payment is not found'}
        });
      }
         res.json({
           typedata: 'pay_res',
           trxid: finnet.trxid,
           invoiceid: bill.noinvoice,
           chanelpayment: finnet.chanelpayment,
           namechanel: namechanel,
           respcode: '96'
         });
       });
      });
    });

module.exports = router;
