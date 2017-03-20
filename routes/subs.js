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

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(upload.array());
router.use(cookieParser());
router.use(session({secret: "Your secret key"}))

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
router.post('/signin', function(req, res, next){
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
            token: token,
            sessionId: doc.id
        })
    })
})

/* GET detail sub. */
router.get('/sub/detailsub', function(req, res, next) {
  var mysubs;
  if(req.session.subs){
    console.log(req.session.subs);
  mysubs = req.session.subs;
}
var decoded = jwt.decode(req.query.mysubs);
Sub.findOne({_id: decode._id}, function(err, subs) {
  console.log( subs );
  res.json(subs);
});
});
module.exports = router;
