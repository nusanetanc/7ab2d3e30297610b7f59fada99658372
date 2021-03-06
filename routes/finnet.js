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
   stsnopay='Waiting For Payment';
   if (finnet.typedata !== 'inq_req'){
     return res.status(404).json({
         title: 'Type Data Not Valid',
         respcode: '92',
         error: {message: 'Type Data Not Valid'}
     });
   }
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
  Bill.findOne({sub: doc._id, status: "'Waiting For Payment'"}, function(err1, bill) {
    if (err1) {
        return res.status(404).json({
            title: 'An error occured',
            respcode: '94',
            error: {message: 'Time Out'}
        });
    }
    if (!bill) {
        return res.status(404).json({
            title: 'No bills',
            respcode: '95',
            error: {message: 'Bills could not be found'}
        });
    }
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
    hashsignature= md5(req.body.trxid+req.body.trxdate+req.body.subid+req.body.amount+req.body.secretkey);
    if (req.body.typedata !== 'pay_req'){
      return res.status(404).json({
          title: 'Type Data Not Valid',
          respcode: '92',
          error: {message: 'Type Data Not Valid'}
      });
    }
   if (req.body.secretkey !== 'gro0vy'){
     return res.status(404).json({
         title: 'Secret Key Not Valid',
         respcode: '93',
         error: {message: 'Secret Key Not Valid'}
     });
   }
   if (req.body.signature !== hashsignature){
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
    Bill.findOne({sub: doc._id, status: "'Waiting For Payment'"}, function(err1, bill) {
      if (err1) {
          return res.status(404).json({
              title: 'An error occured',
              respcode: '94',
              error: {message: 'Time Out'}
          });
      }
      if (!bill) {
          return res.status(404).json({
              title: 'No bills',
              respcode: '98',
              error: {message: 'Bills could not be found'}
          });
      }
if(req.body.amount != bill.totalpay){
  return res.status(404).json({
         title: 'Invalid Amount',
        respcode: '97',
         error: {message: 'Invalid Amount'}
     });
   }
      if(req.body.chanelpayment == "01"){
        var chanelname= 'Indomaret';
      } else if (req.body.chanelpayment == "02") {
        var chanelname= 'Alfamart';
      } else {
        return res.status(404).json({
            title: 'Invalid Chanel Payment',
            respcode: '91',
            error: {message: 'chanel payment is not found'}
        });
      }
      var finnet = new Finnet();
        finnet.sub= doc._id;
        finnet.trxid= req.body.trxid;
        finnet.trxdate= req.body.trxdate;
        finnet.amount= req.body.amount;
        finnet.namechanel= chanelname;
        finnet.invoiceid= bill.noinvoice;
        finnet.bill= bill._id;
           finnet.save(function(err) {
             if (err)
                 res.send(err);
                 res.json({
                   typedata: 'pay_res',
                   trxid: req.body.trxid,
                   trxdate: req.body.trxdate,
                   subid: doc.subid,
                   subname: doc.name,
                   noinvoice: bill.noinvoice,
                   chanelpayment: req.body.chanelpayment,
                   namechanel: chanelname,
                   respcode: '96'
                 });
         });
       });
      });
    });

/* GET billloye listing. */
router.get('/list', function(req, res, next) {
     Finnet.find(function(err, finnets) {
       console.log( finnets );
       res.json(finnets);

   });
});

module.exports = router;
