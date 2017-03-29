var express = require('express');
var router = express.Router();
var Property = require('../models/property');
var City = require('../models/city');
/* GET propertyloye listing. */
router.get('/listproperty', function(req, res, next) {
     Property.find(function(err, propertys) {
       City.findOne({name: propertys.city},function(err, cities) {
       res.json({
         city: propertys.city,
         namecity: cities.name,
         name: propertys.name,
         _id: propertys._id,
       });
     });
   });
});

/* GET detail property. */
router.get('/property/:id', function(req, res, next) {
Property.findById(req.params.id, function(err, propertys) {
       console.log( propertys );
       res.json(propertys);
   });
});

/* GET detail property by city */
router.get('/propertybycity/:id', function(req, res, next) {
    Property.find({city: req.params.id}, function(err, propertys) {
            console.log( propertys );
            res.json(propertys);
        });
    });

/* Add property */
router.post('/addproperty', function(req, res, next) {
  var property = new Property();
    property.name= req.body.name;
    property.propertyid= req.body.propertyid;
    property.cityid= req.body.cityid;
    property.city= req.body.city;
    property.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

router.put('/putproperty/:id', function(req, res, next) {

        Property.findById(req.params.id, function(err, property) {

            if (err)
                res.send(err);
                property.name= req.body.name;
                property.propertyid= req.body.propertyid;
                property.cityid= req.body.cityid;
              if (err)
                res.send(err);

            property.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.delete('/delproperty/:id', function(req, res, next) {
        Property.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

module.exports = router;
