var express = require('express');
var router = express.Router();
var Blokfloor = require('../models/blokfloor');

/* GET blokfloorloye listing. */
router.get('/listblokfloor', function(req, res, next) {
     Blokfloor.find(function(err, blokfloors) {
       console.log( blokfloors );
       res.json(blokfloors);
   });
});

/* GET detail blokfloor. */
router.get('/blokfloor/:id', function(req, res, next) {
Blokfloor.findById(req.params.id, function(err, blokfloors) {
       console.log( blokfloors );
       res.json(blokfloors);
   });
});

/* Add blokfloor */
router.post('/addblokfloor', function(req, res, next) {
  var blokfloor = new Blokfloor();
    blokfloor.name= req.body.name;
    blokfloor.cluster= req.body.cluster;

    blokfloor.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

router.put('/putblokfloor/:id', function(req, res, next) {

        Blokfloor.findById(req.params.id, function(err, blokfloor) {

            if (err)
                res.send(err);

                blokfloor.name= req.body.name;
              if (err)
                res.send(err);

            blokfloor.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.delete('/delblokfloor/:id', function(req, res, next) {
        Blokfloor.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

module.exports = router;
