var express = require('express');
var passwordHash = require('password-hash');
var router = express.Router();
var Information = require('../models/information');
var Emp = require('../models/employee');
var session = require('express-session');
var localStorage = require('localStorage');
router.use(session({
  secret: 'Your secret key',
  saveUninitialized: false,
  resave: false,
  maxAge: 99999999999999999999
}));
/* GET subloye listing. */
router.get('/listinformation', function(req, res, next) {
     Information.find(function(err, informations) {
       console.log( informations );
       console.log(req.session.emp);
       res.json(informations);
   });
});

/* GET information listing by area. */
router.get('/listinformation/:id', function(req, res, next) {
     Information.find({to : req.params.id}, function(err, informations) {
       console.log( informations );
       res.json(informations);
   });
});

/* GET detail sub. */
router.get('/information/:id', function(req, res, next) {
Information.findById(req.params.id, function(err, informations) {
  Emp.findById(informations.usercreate, function(err, emps) {
       res.json({
         _id: informations._id,
         to: informations.to,
         date: informations.date,
         subject: informations.subject,
         desc: informations.desc,
         nameusercretae: emps.name,
         jabusercretae: emps.titlejob
       });
     });
   });
});

/* GET time information. */
router.get('/date/:id', function(req, res, next) {
Information.findById(req.params.id, function(err, informations) {
    console.log( informations );
    res.json(informations);
   });
});

/* Add sub */
router.post('/addinformation', function(req, res, next) {
  var information = new Information();
    information.to= req.body.to;
    information.date= req.body.date;
    information.subject= req.body.subject;
    information.desc= req.body.desc;
    information.usercreate= req.body.usercreate;

    information.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

router.put('/putinformation/:id', function(req, res, next) {

        Information.findById(req.params.id, function(err, information) {

            if (err)
                res.send(err);
                information.to= req.body.to;
                information.date= req.body.date;
                information.subject= req.body.subject;
                information.desc= req.body.desc;
                information.usercreate= req.body.usercreate;
              if (err)
                res.send(err);

            information.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.delete('/delinformation/:id', function(req, res, next) {
        Information.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

module.exports = router;
