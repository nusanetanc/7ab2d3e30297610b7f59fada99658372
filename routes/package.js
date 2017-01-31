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

/* Add package */
router.post('/addpackage', function(req, res, next) {
  var package = new package();

    package.packageid= req.body.packageid;
    package.propertiname= req.body.propertiname;
    package.type= req.body.type;
    //package.passwth= req.body.datebrith;
    package.blokfloor= req.body.blokfloor;
    package.nopackage= req.body.nopackage;
    package.city= req.body.city;
    package.fo= req.body.fo;

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

                package.packageid= req.body.packageid;
                package.propertiname= req.body.propertiname;
                package.type= req.body.type;
                //package.passwth= req.body.datebrith;
                package.blokfloor= req.body.blokfloor;
                package.nopackage= req.body.nopackage;
                package.city= req.body.city;
                package.fo= req.body.fo;
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
