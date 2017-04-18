var express = require('express');
var passwordHash = require('password-hash');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();
var Sub = require('../models/subs');
var Home = require('../models/home');
var randomInt = require('random-int');
var damm = require('damm');
var jwt = require('jsonwebtoken');
var session = require('express-session');
var localStorage = require('localStorage');
var jwtDecode = require('jwt-decode');
var Bill = require('../models/bill');
var City = require('../models/city');
var Cluster = require('../models/cluster');
var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    pool: true,
    host: 'smtp.gmail.com', // Gmail as mail client
    port: 587,
    secureConnection: false, // use SSL
    debug: true,
    tls: {cipher:'SSLv3'},
    auth: {
        user: "web.groovyplay",
        pass: "groovyplay"
    }
});
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});
var upload = multer({ storage:storage });

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(upload.array());
router.use(cookieParser());
router.use(session({
  secret: 'Your secret key',
  saveUninitialized: true,
  resave: true,
  maxAge: 200000000000000000000
}));

/* GET subloye listing. */
router.get('/listsub', function(req, res, next) {
     Sub.find(function(err, subs) {
       console.log( subs );
       res.json(subs);
   });
});
/* GET detail sub. */
router.get('/subs/:id', function(req, res, next) {
Sub.findById(req.params.id, function(err, subs) {
  if(subs.groovyid == "" || subs.groovyid == null || subs.groovyid == "0"){
    subs.groovyid = "5898330cc0d0992a46465109";
  }
  Home.findById(subs.groovyid, function(err, homes) {
    if(homes.cluster == "" || homes.cluster == null){
      homes.cluster = "58982738f60815180d148f14";
    }
    Cluster.findById(homes.cluster, function(err, clusters) {
      if(homes.city == "" || homes.city == null){
        homes.city = "58d3492416d72b7e166dd977";
      }
     City.findById(homes.city, function(err, cities) {
            res.json({
              _id: subs._id,
              email: subs.email,
              name: subs.name,
              nova: subs.nova,
              packlev: subs.packlev,
              packprice: subs.packprice,
              phone: subs.phone,
              status: subs.status,
              datebirth: subs.datebirth,
              idnumber: subs.idnumber,
              subid: subs.subid,
              dateinst: subs.dateinst,
              timeinst: subs.timeinst,
              regisby: subs.regisby,
              regisref: subs.regisref,
              activedate: subs.activedate,
              promo: subs.promo,
              groovyid: homes.groovyid,
              address: homes.address,
              nohome: homes.nohome,
              cluster: clusters.name,
              city: cities.name
            });
          });
        });
      });
    });
});

/* GET detail sub. */
router.get('/detailsub', function(req, res, next) {
  if(req.session.subs){
      var sessionSubId = req.session.subs;
}
  Sub.findOne({_id: sessionSubId}, function(err, subs) {
    console.log( subs );
    res.json(subs);
  });
});

/* GET detail bill one account. */
router.get('/bill', function(req, res, next) {
  if(req.session.subs){
      var sessionSubId = req.session.subs;
  }
Bill.find({sub: sessionSubId}, function(err, bills) {
       console.log( bills );
       res.json(bills);
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
    sub.packprice= req.body.packprice;
    sub.dateinst= req.body.dateinst;
    sub.timeinst= req.body.timeinst;
    sub.cardid= req.body.cardid;
    sub.nova= req.body.nova;
    sub.status= req.body.status;
    sub.regisby= req.body.regisby;
    sub.regisref= req.body.regisref;
    sub.groovyid= req.body.groovyid;
    sub.idnumber= req.body.idnumber;
    sub.datebirth= req.body.datebirth;

    sub.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
      var mailOptions={
      linkact: "http://groovy.id/activation/",
      to: "cs@groovy.id",
      subject : "Activation Your Registrastion",
      text : "Hi.. "+req.body.name+", Register at groovy success, for account activation please click the following link: "+linkact+", then later our customer service right to contact your phone number to validate the data, then your account will be active groovy. Thanks"
      }
      console.log(mailOptions);
      smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
      console.log(error);
      res.end("error");
      }else{
      console.log("Message sent: " + response.message);
      res.end("sent");
      }
      });
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
                sub.phone= req.body.phone;
                sub.packlev= req.body.packlev;
                sub.packprice= req.body.packprice;
                sub.dateinst= req.body.dateinst;
                sub.timeinst= req.body.timeinst;
                sub.cardid= req.body.cardid;
                sub.nova= req.body.nova;
                sub.status= req.body.status;
                sub.regisby= req.body.regisby;
                sub.regisref= req.body.regisref;
                sub.groovyid= req.body.groovyid;
                sub.idnumber= req.body.idnumber;
                sub.datebirth= req.body.datebirth;
                sub.activedate= req.body.activedate;
                sub.promo= req.body.promo;
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
            req.session.subs = doc.id;
      }
        res.status(200).json({
            message: 'Success',
            token: req.session.accesssub,
            sessionId: doc.id
        })
    })
})

module.exports = router;
