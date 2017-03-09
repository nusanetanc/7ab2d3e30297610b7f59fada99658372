var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');

var Emp = require('../models/employee');

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
        res.status(200).json({
            message: 'Success',
            token: token,
            sessionId: doc._id
        })
    })
});

module.exports = router;
