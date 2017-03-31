var express = require('express');
var router = express.Router();
var Streetname = require('../models/street_name');

/* GET streetname listing. */
router.get('/liststreetname', function(req, res, next) {
    Streetname.find(function(err, streetnames) {
        console.log( streetnames );
        res.json(streetnames);
    });
});

/* GET detail streetname. */
router.get('/streetname/:id', function(req, res, next) {
    Streetname.findById(req.params.id, function(err, streetnames) {
        console.log( streetnames );
        res.json(streetnames);
    });
});

/* GET detail streetname by blok. */
router.get('/streetnamebyblok/:id', function(req, res, next) {
    Streetname.find({blok: req.params.id}, function(err, streetnames) {
        console.log( streetnames );
        res.json(streetnames);
    });
});

/* Add streetname */
router.post('/addstreetname', function(req, res, next) {
    var streetname = new Streetname();
    streetname.name= req.body.name;
    streetname.blok= req.body.blok;

    streetname.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'Data created!' });
    });
});

router.put('/putstreetname/:id', function(req, res, next) {

    Streetname.findById(req.params.id, function(err, streetname) {

        if (err)
            res.send(err);

        streetname.name= req.body.name;
        if (err)
            res.send(err);

        streetname.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Data updated!' });
        });
    });
});

router.delete('/delstreetname/:id', function(req, res, next) {
    Streetname.remove({
        _id: req.params.id
    }, function(err, bear) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});

module.exports = router;
