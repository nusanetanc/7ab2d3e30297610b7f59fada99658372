var express = require('express');
var router = express.Router();
var Finnet = require('../models/finnet');
var Sub = require('../models/subs');

/* GET detail bill one account. */
router.post('/inqreq/:subid', function(req, res, next) {
Sub.find({subid: req.params.subid}, function(err, subs) {
       console.log( subs );
       res.json(subs);
   });
});


module.exports = router;
