var express = require('express');
var router = express.Router();
var Property = require('../models/property');

/* GET propertyloye listing. */
router.get('/listproperty', function(req, res, next) {
     Property.find(function(err, propertys) {
       console.log( propertys );
       res.json(propertys);
   });
});

/* GET detail property. */
router.get('/property/:id', function(req, res, next) {
Property.findById(req.params.id, function(err, propertys) {
       console.log( propertys );
       res.json(propertys);
   });
});

/* Add property */
router.post('/addproperty', function(req, res, next) {
  var property = new Property();
    property.accsess= req.body.accsess;
    property.page= req.body.page;
    property.menu= req.body.menu;

    Property.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

router.put('/putproperty/:id', function(req, res, next) {

        Property.findById(req.params.id, function(err, property) {

            if (err)
                res.send(err);

                property.accsess= req.body.accsess;
                property.page= req.body.page;
                property.menu= req.body.menu;
              if (err)
                res.send(err);

            Property.save(function(err) {
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
