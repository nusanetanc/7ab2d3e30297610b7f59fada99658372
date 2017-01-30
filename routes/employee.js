var express = require('express');
var router = express.Router();
var Emp = require('../models/employee')

/* GET employe listing. */
router.get('/listemp', function(req, res, next) {
     Sub.find(function(err, emps) {
       console.log( emps );
       res.json(subs);
   });
});

/* GET detail employe. */
router.get('/emp/:id', function(req, res, next) {
Sub.findById(req.params.id, function(err, subs) {
       console.log( emps );
       res.json(emps);
   });
});

/* Add employe */
router.post('/addemp', function(req, res, next) {
  var emp = new ({
    idemployee: req.body.idemployee,
    name: req.body.name,
    email: req.body.email,
    password: passwordHash.generate(req.body.password),
    departement: req.body.departement,
    titlejob: req.body.titlejob,
    accessrole: req.body.accessrole,
    photo: req.body.photo

  });
    emp.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

module.exports = router;
