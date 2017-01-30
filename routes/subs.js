var express = require('express');
var router = express.Router();
var sub = require('../models/subs')

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
  var sub = new sub();
    sub.subid= req.body.subid;
    sub.name= req.body.name;
    sub.email= req.body.email;
    //sub.password= passwordHash.generate(req.body.password);
    sub.nohp= req.body.nohp;
    sub.datebrith= req.body.datebrith;
    sub.homeid= req.body.homeid;
    sub.homedesc= req.body.homedesc;
    sub.jobs= req.body.jobs;
    sub.packlev= req.body.packlev;
    sub.cardid= req.body.cardid;
    sub.nova= req.body.nova;

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
                //sub.password= passwordHash.generate(req.body.password);
                sub.nohp= req.body.nohp;
                sub.datebrith= req.body.datebrith;
                sub.homeid= req.body.homeid;
                sub.homedesc= req.body.homedesc;
                sub.jobs= req.body.jobs;
                sub.packlev= req.body.packlev;
                sub.cardid= req.body.cardid;
                sub.nova= req.body.nova;

            sub.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

module.exports = router;
