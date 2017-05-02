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
router.get('/id/:id', function(req, res, next) {
  Sub.findById(req.params.id, function(err, subs) {
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
    if(subs.groovyid == "" || subs.groovyid == null || subs.groovyid == "0"){
      subs.groovyid = "5898330cc0d0992a46465109";
    }
    Home.findOne({_id: subs.groovyid}, function(err, homes) {
      if(homes.cluster == "" || homes.cluster == null){
        homes.cluster = "58982738f60815180d148f14";
      }
      Cluster.findOne({_id: homes.cluster}, function(err, clusters) {
        if(homes.city == "" || homes.city == null){
          homes.city = "58d3492416d72b7e166dd977";
        }
       City.findOne({_id:homes.city}, function(err, cities) {
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
  var codeactivation = require('node-sid')({
 seed:'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
 len:50,
 headerField:'x-node-sid'
}).create();
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
    sub.codeactivation = codeactivation;
    sub.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
      var mailOptions={
      to: req.body.email,
      subject : "Activation Your Registrastion",
      html : `<body style="font-family:Arial;font-size:15px;">
        <div style="max-width:600px;margin:0 auto;margin-top:30px;">
            <div style="height:76px;width:100%;background-color:#fff;">
                <img src="http://202.162.207.164:3000/images/logo-groovy.png" height="37px" style="margin:20px 0 0 30px"/>
            </div>
            <div style="background-color:#FC592E;padding:70px 30px 85px 30px;color:#fff;">
                <h2 style="font-weight:200;margin:0;padding:0;font-size:30px;">Welcome to Groovy</h2>
                <p style="font-weight:200;margin:0;padding-top:10px;">Happy is simple. Start from your home right now!</p>
            </div>
            <div style="background-color:#fff;padding:20px 30px 20px 30px;color:#444;">
                <p style="line-height:1.5">
                Hello `+req.body.name+`,<br/><br/>
                Your registration at Groovy success. To activate your account, click the following button.
                </p>
                <div style="text-align:left;margin-top:30px">
                    <a href="http://202.162.207.164:3000/activated/`+codeactivation+`" style="padding:12px 50px 12px 50px;font-size:14px;border-radius:3px;background-color:#FC592E;color:#fff;text-decoration:none;box-shadow:1px 1px 5px #999;">CONFIRM EMAIL</a>
                </div>
                <p style="line-height:1.5;margin-top:40px;">
                Then our customer service will be contact your phone number to
validate the data, then your Groovy account will be activated.<br/><br/>
                Thanks.</p>
            </div>
        </div>
        <div style="max-width:600px;margin:0 auto;margin-top:10px;margin-bottom:50px;">
            <div style="background-color:#fff;height:80px;padding:20px 30px 20px 30px;color:#444;font-size:12px">
                <div style="display:block;">
                    <div style="float:left;width:50%">
                        <a href="" style="color:#555;font-weight:600;text-decoration:none">support@groovy.id</a>
                        <br/><br/>
                        Groovy - PT Media Andalan Nusa<br/>
                        Cyber Building 7th Floor, Jl Kuningan Barat 8<br/>
                        Jakarta 12710, Indonesia
                    </div>
                    <div style="float:left;width:50%">

                    </div>

                </div>
            </div>
        </div>
    </body>`
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
