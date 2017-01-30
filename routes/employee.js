var express = require('express');
var router = express.Router();
var Sub = require('../models/subs')

/* GET employe listing. */
router.get('/list', function(req, res, next) {
     Sub.find(function(err, subs) {
       console.log( subs );
       res.json(subs);
   });
});

/* GET detail employe listing. */
router.get('/emp/:id', function(req, res, next) {
Sub.findById(req.params.id, function(err, subs) {
       console.log( subs );
       res.json(subs);
   });
});

module.exports = router;
