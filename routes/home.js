var express = require('express');
var router = express.Router();
var Home = require('../models/home');

/* GET homeloye listing. */
router.get('/listhome', function(req, res, next) {
     Home.find(function(err, homes) {
       console.log( homes );
       res.json(homes);
   });
});

/* GET detail home. */
router.get('/home/:id', function(req, res, next) {
Home.findById(req.params.id, function(err, homes) {
       console.log( homes );
       res.json(homes);
   });
});

/* GET detail home by street. */
router.get('/homebystreet/:id', function(req, res, next) {
Home.find({streetname: req.params.id}, function(err, homes) {
       console.log( homes );
       res.json(homes);
   });
});

/* Add home */
router.post('/addhome', function(req, res, next) {
  var home = new Home();

    home.groovyid= require('node-sid')({
   seed:'0123456789abcdefghijklmnopqrstuvwxyz',
   len:6,
   headerField:'x-node-sid'
 }).create();
    home.city= req.body.city;
    home.property= req.body.property;
    home.cluster= req.body.cluster;
    home.blokfloor= req.body.blokfloor;
    home.streetname= req.body.streetname;
    home.nohome= req.body.nohome;
    home.address= req.body.address;
    home.vendorfo= req.body.vendorfo;
    home.vendortv= req.body.vendortv;
    home.perangkat= req.body.perangkat;

    home.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

router.put('/puthome/:id', function(req, res, next) {

        Home.findById(req.params.id, function(err, home) {

            if (err)
                res.send(err);
                home.city= req.body.city;
                home.property= req.body.property;
                home.cluster= req.body.cluster;
                home.blokfloor= req.body.blokfloor;
                home.streetname= req.body.streetname;
                home.nohome= req.body.nohome;
                home.address= req.body.address;
                home.vendorfo= req.body.vendorfo;
                home.vendortv= req.body.vendortv;
                home.perangkat= req.body.perangkat;
              if (err)
                res.send(err);

            home.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.delete('/delhome/:id', function(req, res, next) {
        Home.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

module.exports = router;
