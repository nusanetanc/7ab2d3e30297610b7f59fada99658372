var express = require('express');
var router = express.Router();
var Module = require('../models/module');

/* GET moduleloye listing. */
router.get('/listmodule', function(req, res, next) {
     module.find(function(err, modules) {
       console.log( modules );
       res.json(modules);
   });
});

/* GET detail module. */
router.get('/module/:id', function(req, res, next) {
Module.findById(req.params.id, function(err, modules) {
       console.log( modules );
       res.json(modules);
   });
});

/* Add module */
router.post('/addmodule', function(req, res, next) {
  var module = new Module();
    module.accsess= req.body.accsess;
    module.page= req.body.page;
    module.menu= req.body.menu;

    module.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

router.put('/putmodule/:id', function(req, res, next) {

        Module.findById(req.params.id, function(err, module) {

            if (err)
                res.send(err);

                module.accsess= req.body.accsess;
                module.page= req.body.page;
                module.menu= req.body.menu;
              if (err)
                res.send(err);

            module.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.delete('/delmodule/:id', function(req, res, next) {
        Module.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

module.exports = router;
