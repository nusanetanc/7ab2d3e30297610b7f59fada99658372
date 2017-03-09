var express = require('express');
var router = express.Router();
var Modul = require('../models/modul');

/* GET modulloye listing. */
router.get('/listmodul', function(req, res, next) {
     Modul.find(function(err, moduls) {
       console.log( moduls );
       res.json(moduls);
   });
});

/* GET detail modul. */
router.get('/modul/:id', function(req, res, next) {
Modul.findById(req.params.id, function(err, moduls) {
       console.log( moduls );
       res.json(moduls);
   });
});

/* Add modul */
router.post('/addmodul', function(req, res, next) {
  var modul = new Modul();
    modul.accsess= req.body.accsess;
    modul.page= req.body.page;
    modul.menu= req.body.menu;

    modul.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

router.put('/putmodul/:id', function(req, res, next) {

        Modul.findById(req.params.id, function(err, modul) {

            if (err)
                res.send(err);

                modul.accsess= req.body.accsess;
                modul.page= req.body.page;
                modul.menu= req.body.menu;
              if (err)
                res.send(err);

            modul.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.delete('/delmodul/:id', function(req, res, next) {
        Modul.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

module.exports = router;
