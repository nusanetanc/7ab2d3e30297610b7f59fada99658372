var express = require('express');
var router = express.Router();
var Emp = require('../models/employee')

/* GET employe listing. */
router.get('/listemp', function(req, res, next) {
     Emp.find(function(err, emps) {
       console.log( emps );
       res.json(emps);
   });
});

/* GET detail employe. */
router.get('/emp/:id', function(req, res, next) {
Emp.findById(req.params.id, function(err, subs) {
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

module.exports = router;
