var express = require('express');
var passwordHash = require('password-hash');
var router = express.Router();
var Sub = require('../models/subs');
var randomInt = require('random-int');
var damm = require('damm');
var jwt = require('jsonwebtoken');

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
    var Random = String(randomInt(10000, 99999));
    var checkdigit = damm.append(Random);
    sub.subid = "GR"+checkdigit;
    sub.name= req.body.name;
    sub.email= req.body.email;
    sub.phone= req.body.phone;
    sub.packlev= req.body.packlev;
    sub.dateinst= req.body.dateinst;
    sub.timeinst= req.body.timeinst;
    sub.cardid= req.body.cardid;
    sub.nova= req.body.nova;
    sub.status= req.body.status;
    sub.regisby= req.body.regisby;
    sub.regisref= req.body.regisref;
    sub.groovyid= req.body.groovyid;
    sub.phone= req.body.phone;

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
                sub.subid= req.body.subid;
                sub.name= req.body.name;
                sub.email= req.body.email;
                sub.password= passwordHash.generate(req.body.password);
                sub.packlev= req.body.packlev;
                sub.cardid= req.body.cardid;
                sub.nova= req.body.nova;
                sub.status= req.body.status;
                sub.groovyid= req.body.groovyid;
                sub.phone= req.body.phone;
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
//signin subscribe
router.post('/signin', function(req, res, next){
    Sub.findOne({email: req.body.email}, function(err, doc){
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
        if (!passwordHash.verify(req.body.password, doc.password)){
            return res.status(404).json({
                title: 'Could not sign you in',
                error: {message: 'Invalid password'}
            });
        }
        var token = jwt.sign({sub:doc}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Success',
            token: token,
            sessionId: doc._id,
            localStorage.getItem(sessionId, doc._id);
        })
    })
})

module.exports = router;
