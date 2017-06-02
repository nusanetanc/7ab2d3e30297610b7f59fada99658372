var express = require('express');
var router = express.Router();
var Package = require('../models/package');

/* GET packageloye listing. */
router.get('/listpackage', function(req, res, next) {
     Package.find(function(err, packages) {
       console.log( packages );
       res.json(packages);
   });
});

/* GET detail package. */
router.get('/package/:id', function(req, res, next) {
Package.findById(req.params.id, function(err, packages) {
       console.log( packages );
       res.json(packages);
   });
});

/* GET detail package. */
router.get('/list/Default', function(req, res, next) {
Package.find({type: 'Default'}, function(err, packages) {
       console.log( packages );
       res.json(packages);
   });
});
/* GET detail package. */
router.get('/list/Promo/:id', function(req, res, next) {
Package.find({type: 'Promo', cluster: req.params.id}, function(err, packages) {
       console.log( packages );
       res.json(packages);
   });
});

/* Add package */
router.post('/addpackage', function(req, res, next) {
  var package = new Package();

    package.level= req.body.level;
    package.price= req.body.price;
    package.detail= req.body.detail;
    package.cluster= req.body.cluster;
    package.type= req.body.type;

    package.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

router.put('/putpackage/:id', function(req, res, next) {

        Package.findById(req.params.id, function(err, package) {

            if (err)
                res.send(err);

                package.level= req.body.level;
                package.price= req.body.price;
                package.detail= req.body.detail;
                package.cluster= req.body.cluster;
              if (err)
                res.send(err);

            package.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.delete('/delpackage/:id', function(req, res, next) {
        Package.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

module.exports = router;
