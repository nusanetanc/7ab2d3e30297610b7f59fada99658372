var express = require('express');
var router = express.Router();
var TypeProperty = require('../models/type');

/* GET typepropertyloye listing. */
router.get('/listtypeproperty', function(req, res, next) {
     TypeProperty.find(function(err, typepropertys) {
       console.log( typepropertys );
       res.json(typepropertys);
   });
});

/* GET detail typeproperty. */
router.get('/typeproperty/:id', function(req, res, next) {
TypeProperty.findById(req.params.id, function(err, typepropertys) {
       console.log( typepropertys );
       res.json(typepropertys);
   });
});

/* Add typeproperty */
router.post('/addtypeproperty', function(req, res, next) {
  var typeproperty = new TypeProperty();
    typeproperty.name= req.body.name;
    typeproperty.property= req.body.property;
    typeproperty.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

router.put('/puttypeproperty/:id', function(req, res, next) {

        TypeProperty.findById(req.params.id, function(err, typeproperty) {

            if (err)
                res.send(err);

                typeproperty.name= req.body.name;
              if (err)
                res.send(err);

            typeproperty.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.delete('/deltypeproperty/:id', function(req, res, next) {
        TypeProperty.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

module.exports = router;
