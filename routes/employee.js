var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');

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


/* GET employe listing. */
router.get('/listemp', function(req, res, next) {
     Emp.find(function(err, emps) {
       console.log( emps );
       res.json(emps);
   });
});

/* GET detail employe. */
router.get('/emp/:id', function(req, res, next) {
Emp.findById(req.params.id, function(err, emps) {
       console.log( emps );
       res.json(emps);
   });
});

router.get('/detailemp', function(req, res, next) {
  if(req.session.emp){
      sessionEmpId = req.session.emp;
}
     Emp.findOne({_id: sessionEmpId}, function(err, emps) {
       console.log( emps );
       res.json(emps);
   });
});

/* Add employe */
router.post('/addemp', function(req, res, next) {
  var emp = new Emp();
    emp.idemployee= req.body.idemployee;
    emp.name= req.body.name;
    emp.email= req.body.email;
    emp.password= passwordHash.generate(req.body.password);
    emp.departement= req.body.departement;
    emp.titlejob= req.body.titlejob;
    emp.accessrole= req.body.accessrole;
    emp.photo= req.body.photo;

    emp.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

router.put('/putemp/:id', function(req, res, next) {

        Emp.findById(req.params.id, function(err, emp) {

            if (err)
                res.send(err);

                emp.idemployee= req.body.idemployee;
                emp.name= req.body.name;
                emp.email= req.body.email;
                emp.password= passwordHash.generate(req.body.password);
                emp.departement= req.body.departement;
                emp.titlejob= req.body.titlejob;
                emp.accessrole= req.body.accessrole;
                emp.photo= req.body.photo;

            // save the bear
            emp.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.delete('/delemp/:id', function(req, res, next) {
        Emp.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

//signin employee
router.post('/signin', function(req, res, next){
    Emp.findOne({email: req.body.email}, function(err, doc){
        if (err) {
            return res.status(404).json({
                title: 'An error occured',
                error: err
            });
        }
        if (!doc) {
            return res.status(404).json({
                title: 'No user found',
                error: {message: 'User could not be found'}
            });
        }
        if (!passwordHash.verify(req.body.password, doc.password)){
            return res.status(404).json({
                title: 'Could not sign you in',
                error: {message: 'Invalid password'}
            });
        }
        var token = jwt.sign({emp:doc}, 'secret', {expiresIn: 7200});
        if(!req.session.emp){
            req.session.emp = doc.id;
      }
      if(!req.session.accessrole){
          req.session.accessrole = doc.accessrole;
    }
        res.status(200).json({
            message: 'Success',
            token: token,
            sessionId: doc.id,
            accessrole: req.session.accessrole
        })
    })
});

module.exports = router;
