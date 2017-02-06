var express = require('express');
var router = express.Router();
var City = require('../models/city');

/* GET cityloye listing. */
router.get('/listcity', function(req, res, next) {
     City.find(function(err, citys) {
       console.log( citys );
       res.json(citys);
   });
});

/* GET detail city. */
router.get('/city/:id', function(req, res, next) {
City.findById(req.params.id, function(err, citys) {
       console.log( citys );
       res.json(citys);
   });
});

/* Add city */
router.post('/addcity', function(req, res, next) {
  var city = new City();
    city.accsess= req.body.accsess;
    city.page= req.body.page;
    city.menu= req.body.menu;

    City.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

router.put('/putcity/:id', function(req, res, next) {

        City.findById(req.params.id, function(err, city) {

            if (err)
                res.send(err);

                city.accsess= req.body.accsess;
                city.page= req.body.page;
                city.menu= req.body.menu;
              if (err)
                res.send(err);

            City.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.delete('/delcity/:id', function(req, res, next) {
        City.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

module.exports = router;
