var express = require('express');
var passwordHash = require('password-hash');
var router = express.Router();
var Information = require('../models/information');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var router = express.Router();
var Sub = require('../models/subs');
var randomInt = require('random-int');
var damm = require('damm');
var jwt = require('jsonwebtoken');
var session = require('express-session');
var localStorage = require('localStorage');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(upload.array());
router.use(cookieParser());
router.use(session({secret: "Your secret key"}));

if(req.session.subs){
    var sessionSubId = req.session.subs;
}

/* GET subloye listing. */
router.get('/listinformation', function(req, res, next) {
     Information.find(function(err, informations) {
       console.log( informations );
       res.json(informations);
   });
});

/* GET detail sub. */
router.get('/information/:id', function(req, res, next) {
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
    information.status= req.body.status;
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
                information.status= req.body.status;
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
