var express = require('express');
var router = express.Router();
var Finnet = require('../models/finnet');
var Sub = require('../models/subs');

/* GET detail bill one account. */
router.post('/inqreq/', function(req, res, next) {
Sub.findOne({subid: req.body.subid}, function(err, doc) {
       res.json({
         subid: doc.subid,
         subname: doc.name,
         amount: doct.amount
       });
   });
});


module.exports = router;
