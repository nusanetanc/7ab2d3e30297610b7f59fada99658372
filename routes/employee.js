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
    sub.idemployee= req.body.idemployee,
    sub.name= req.body.name,
    sub.email= req.body.email,
    sub.password= passwordHash.generate(req.body.password),
    sub.departement= req.body.departement,
    sub.titlejob= req.body.titlejob,
    sub.accessrole= req.body.accessrole,
    sub.photo= req.body.photo

    emp.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

module.exports = router;
