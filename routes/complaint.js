var express = require('express');
var router = express.Router();
var Complaint = require('../models/complaint');

/* GET compalintloye listing. */
router.get('/listcomplaint', function(req, res, next) {
     Complaint.find(function(err, compalints) {
       console.log( compalints );
       res.json(compalints);
   });
});

/* GET detail compalint. */
router.get('/compalint/:id', function(req, res, next) {
Complaint.findById(req.params.id, function(err, compalints) {
       console.log( compalints );
       res.json(compalints);
   });
});

/* Add compalint */
router.post('/addcompalint', function(req, res, next) {
  var compalint = new Compalint();

    compalint.compalintid= req.body.compalintid;
    compalint.propertiname= req.body.propertiname;
    compalint.type= req.body.type;
    //compalint.passwth= req.body.datebrith;
    compalint.blokfloor= req.body.blokfloor;
    compalint.nocompalint= req.body.nocompalint;
    compalint.city= req.body.city;
    compalint.fo= req.body.fo;

    compalint.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

router.put('/putcompalint/:id', function(req, res, next) {

        Complaint.findById(req.params.id, function(err, compalint) {

            if (err)
                res.send(err);

                compalint.compalintid= req.body.compalintid;
                compalint.propertiname= req.body.propertiname;
                compalint.type= req.body.type;
                //compalint.passwth= req.body.datebrith;
                compalint.blokfloor= req.body.blokfloor;
                compalint.nocompalint= req.body.nocompalint;
                compalint.city= req.body.city;
                compalint.fo= req.body.fo;
              if (err)
                res.send(err);

            compalint.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.delete('/delcompalint/:id', function(req, res, next) {
        compalint.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

module.exports = router;
