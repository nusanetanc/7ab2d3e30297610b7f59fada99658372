var express = require('express');
var passwordHash = require('password-hash');
var router = express.Router();
var Sub = require('../models/subs');
var randomInt = require('random-int');
var damm = require('damm');

/* GET subloye listing. */
router.get('/listsub', function(req, res, next) {
     Sub.find(function(err, subs) {
       console.log( subs );
       res.json(subs);
   });
});

/* GET detail sub. */
router.get('/sub/:id', function(req, res, next) {
Sub.findById(req.params.id, function(err, subs) {
       console.log( subs );
       res.json(subs);
   });
});

/* Add sub */
router.post('/addsub', function(req, res, next) {
  var sub = new Sub();
    sub.subid = damm.append(randomInt(10000, 99999));
    sub.name= req.body.name;
    sub.email= req.body.email;
    sub.password= passwordHash.generate(req.body.password);
    sub.packlev= req.body.packlev;
    sub.cardid= req.body.cardid;
    sub.nova= req.body.nova;
    sub.status= req.body.status;

    sub.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

router.put('/putsub/:id', function(req, res, next) {

        Sub.findById(req.params.id, function(err, sub) {

            if (err)
                res.send(err);
                sub.name= req.body.name;
                sub.email= req.body.email;
                sub.password= passwordHash.generate(req.body.password);
                sub.packlev= req.body.packlev;
                sub.cardid= req.body.cardid;
                sub.nova= req.body.nova;
                sub.status= req.body.status;
              if (err)
                res.send(err);

            sub.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.delete('/delsub/:id', function(req, res, next) {
        Sub.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

module.exports = router;
