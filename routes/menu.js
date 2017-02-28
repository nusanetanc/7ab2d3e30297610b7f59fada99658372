var express = require('express');
var router = express.Router();
var Menu = require('../models/menu');

/* GET menu listing. */
router.get('/listmenu', function(req, res, next) {
    Menu.find(function(err, menus) {
        console.log( menus );
        res.json(menus);
    });
});

/* GET detail menu. */
router.get('/menu/:id', function(req, res, next) {
    Menu.findById(req.params.id, function(err, menus) {
        console.log( menus );
        res.json(menus);
    });
});

/* Add Menu */
router.post('/addmenu', function(req, res, next) {
    var menu = new Menu();
    menu.title= req.body.title;
    menu.file= req.body.file;
    menu.icons= req.body.icons;
    menu.access= req.body.access;

    menu.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'Data created!' });
    });
});

router.put('/putmenu/:id', function(req, res, next) {

    Menu.findById(req.params.id, function(err, menu) {

        if (err)
            res.send(err);

        menu.title= req.body.title;
        menu.file= req.body.file;
        menu.icons= req.body.icons;
        menu.access= req.body.access;
        if (err)
            res.send(err);

        menu.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Data updated!' });
        });
    });
});

router.delete('/delmenu/:id', function(req, res, next) {
    Menu.remove({
        _id: req.params.id
    }, function(err, bear) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});

module.exports = router;
