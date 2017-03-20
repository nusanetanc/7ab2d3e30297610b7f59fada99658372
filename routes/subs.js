var express = require('express');
var passwordHash = require('password-hash');
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
var jwtDecode = require('jwt-decode');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(upload.array());
router.use(cookieParser());
router.use(session({secret: "Your secret key"}));


/* GET subloye listing. */
router.get('/listsub', function(req, res, next) {
     Sub.find(function(err, subs) {
       console.log( subs );
       res.json(subs);
   });
});
/* GET detail sub. */
router.get('/sub/:id', function(req, res, next) {
Sub.findById(req.params.id, function(err, subs) {
       console.log( subs );
       res.json(subs);
   });
});

/* GET detail sub. */
router.get('/detailsub', function(req, res, next) {
  //var mysubs = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiX192IjowLCJfaWQiOiI1OGIzY2RhYzQ1OTEyZDA1MmUyYzg1YTUiLCJlbWFpbCI6ImRldmVsb3BlcnNAZ3Jvb3Z5LmlkIiwiZ3Jvb3Z5aWQiOiI1ODk4MzMwY2MwZDA5OTJhNDY0NjUxMDkiLCJuYW1lIjoiVGVzIEFkbWluIiwibm92YSI6NzIwMDIzMjEzNDIxNCwicGFja2xldiI6IjEiLCJwYXNzd29yZCI6InNoYTEkMTg2MWNjNTMkMSQ5YWQzZGY3OTU3NDM3YWZhZGNmYmI4MTNlNDMzZDlhNTQ0Y2UwMTE1IiwicGhvbmUiOiI4NTcyMzM5OTAzNCIsInN0YXR1cyI6IkFrdGlmIiwic3ViaWQiOiJHUjYxOTkxNiIsImhpc3RvcnkiOltdLCJiaWxsaW5nIjpbXX0sImlhdCI6MTQ4OTk4NDA0MiwiZXhwIjoxNDg5OTkxMjQyfQ.Ie4yiijpdGmWphaVvVmv9yLKXWw63SFT1jRT1fZkUfI";
  //var decoded = jwt_decode(mysubs);
  Sub.findOne({_id: '58b3cdac45912d052e2c85a5'}, function(err, subs) {
    console.log( subs );
    res.json(subs);
  });
});

/* Add sub */
router.post('/addsub', function(req, res, next) {
  var sub = new Sub();
    var Random = String(randomInt(10000, 99999));
    var checkdigit = damm.append(Random);
    sub.subid = "GR"+checkdigit;
    sub.name= req.body.name;
    sub.email= req.body.email;
    sub.phone= req.body.phone;
    sub.packlev= req.body.packlev;
    sub.dateinst= req.body.dateinst;
    sub.timeinst= req.body.timeinst;
    sub.cardid= req.body.cardid;
    sub.nova= req.body.nova;
    sub.status= req.body.status;
    sub.regisby= req.body.regisby;
    sub.regisref= req.body.regisref;
    sub.groovyid= req.body.groovyid;
    sub.phone= req.body.phone;

    sub.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

router.put('/putsub/:id', function(req, res, next) {

        Sub.findById(req.params.id, function(err, sub) {

            if (err)
                res.send(err);
                sub.subid= req.body.subid;
                sub.name= req.body.name;
                sub.email= req.body.email;
                sub.password= passwordHash.generate(req.body.password);
                sub.packlev= req.body.packlev;
                sub.cardid= req.body.cardid;
                sub.nova= req.body.nova;
                sub.status= req.body.status;
                sub.groovyid= req.body.groovyid;
                sub.phone= req.body.phone;
              if (err)
                res.send(err);

            sub.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.delete('/delsub/:id', function(req, res, next) {
        Sub.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});
router.post('/signin', function(req, res){
    Sub.findOne({email: req.body.email}, function(err, doc){
        if (err) {
            return res.status(404).json({
                title: 'An error occured',
                error: err
            });
        }
        if (!doc) {
       return res.status(404).json({
         title: "No user found",
         error: {message: 'User could not be found.'}
       });
     }

     if (!passwordHash.verify(req.body.password, doc.password)) {
       if (err) {
         return res.status(404).json({
           title: "Could not sign user in",
           error: {message: 'Invalid Password'}
         });
       }
     }
        var token = jwt.sign({sub:doc}, 'secret', {expiresIn: 7200});
        if(!req.session.subs){
            req.session.subs = token;
      }
        res.status(200).json({
            message: 'Success',
            token: req.session.subs,
            sessionId: doc.id
        })
    })
})

module.exports = router;
