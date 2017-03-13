var express = require('express');
var router = express.Router();
var Finnet = require('../models/finnet');
var Sub = require('../models/subs');

/* GET detail bill one account. */
router.post('/inqreq/', function(req, res, next) {
Sub.find({subid: req.body.subid}, function(err, sub) {
       console.log( sub );
       res.json(sub);
   });
});


module.exports = router;
