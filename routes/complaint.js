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

    compalint.idcompalint= req.body.idcompalint;
    compalint.subject= req.body.subject;
    compalint.category= req.body.category;
    compalint.dateopen= req.body.dateopen;
    compalint.dateclose= req.body.dateclose;
    compalint.status= req.body.status;
    compalint.lastchat= req.body.lastchat;

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

                compalint.idcompalint= req.body.idcompalint;
                compalint.subject= req.body.subject;
                compalint.category= req.body.category;
                compalint.dateopen= req.body.dateopen;
                compalint.dateclose= req.body.dateclose;
                compalint.status= req.body.status;
                compalint.lastchat= req.body.lastchat;
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
