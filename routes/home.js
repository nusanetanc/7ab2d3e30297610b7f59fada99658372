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

/* Add home */
router.post('/addhome', function(req, res, next) {
  var home = new Home();

    home.homeid= req.body.homeid;
    home.propertiname= req.body.propertiname;
    home.type= req.body.type;
    //home.passwth= req.body.datebrith;
    home.blokfloor= req.body.blokfloor;
    home.nohome= req.body.nohome;
    home.city= req.body.city;
    home.fo= req.body.fo;

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

                home.homeid= req.body.homeid;
                home.propertiname= req.body.propertiname;
                home.type= req.body.type;
                //home.passwth= req.body.datebrith;
                home.blokfloor= req.body.blokfloor;
                home.nohome= req.body.nohome;
                home.city= req.body.city;
                home.fo= req.body.fo;
              if (err)
                res.send(err);

            home.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

module.exports = router;
