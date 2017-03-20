var express = require('express');
var router = express.Router();
var Menu = require('../models/menu');

var Emp = require('../models/employee');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var router = express.Router();
var randomInt = require('random-int');
var damm = require('damm');
var jwt = require('jsonwebtoken');
var session = require('express-session');
var localStorage = require('localStorage');
var jwtDecode = require('jwt-decode');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(upload.array());
router.use(cookieParser());
router.use(session({secret: "Your secret key"}));

/* GET menu listing. */
router.get('/listmenu', function(req, res, next) {
  if(req.session.accessrole;){
      sessionEmpAccess = req.session.accessrole;
}
    Menu.find({access:sessionEmpAccess}, function(err, menus) {
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
    menu.emp_id= req.body.emp_id;

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
        menu.emp_id= req.body.emp_id;
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
