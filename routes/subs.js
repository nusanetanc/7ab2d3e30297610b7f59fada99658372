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
var Emp = require('../models/employee');
var Complaint = require('../models/complaint');
var Chat = require('../models/chatcomplaint');
var Home = require('../models/home');
var Package = require('../models/package');
var Information = require('../models/information');
var Streetname = require('../models/street_name');
var http = require('http');
var socketio = require('socket.io');

//var server = http.createServer(express);
//var io = socketio.listen(server);

//io.on('connection', function(socket){
//  console.log('a user connected');
//});

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
  saveUninitialized: false,
  resave: true,
  maxAge: 99999999999999999999
}));


/* GET subloye listing. */
router.get('/listsub', function(req, res, next) {
  if(req.session.emp == "" || req.session.emp == null || req.session.emp == "0"){
    return res.status(404).json({
      title: "Access not found"
    });
  } else {
     Sub.find(function(err, subs) {
       console.log( subs );
       res.json(subs);
   });
 }
});

router.get('/detailemp', function(req, res, next) {
  if(req.session.emp == "" || req.session.emp == null || req.session.emp == "0"){
    return res.status(404).json({
      title: "No user Please Signin"
    });
  } else {
    var sessionEmpId = req.session.emp;
     Emp.findOne({_id: sessionEmpId}, function(err, emps) {
       console.log( emps );
       res.json(emps);
   });
 }
});
/* GET employe listing. */
router.get('/listemp', function(req, res, next) {
  if(req.session.emp == "" || req.session.emp == null || req.session.emp == "0"){
    return res.status(404).json({
      title: "Access not found"
    });
  } else {
     Emp.find(function(err, emps) {
       console.log( emps );
       res.json(emps);
   });
 }
});

/* GET employe listing. */
router.get('/list/:departement', function(req, res, next) {
  if(req.session.emp == "" || req.session.emp == null || req.session.emp == "0"){
    return res.status(404).json({
      title: "Access not found"
    });
  } else {
     Emp.find({departement:  req.params.departement}, function(err, emps) {
       console.log( emps );
       res.json(emps);
   });
 }
});
/* GET detail employe. */
router.get('/emp/:id', function(req, res, next) {
  if(req.session.emp == "" || req.session.emp == null || req.session.emp == "0"){
    return res.status(404).json({
      title: "Access not found"
    });
  } else {
Emp.findById(req.params.id, function(err, emps) {
       console.log( emps );
       res.json(emps);
   });
 }
});

/* GET subloye listing. */
router.get('/listinformation', function(req, res, next) {
  if(req.session.subs == "" || req.session.subs == null || req.session.subs == "0"){
    return res.status(404).json({
      title: "Access not found"
    });
  } else {
    Sub.findById(req.session.subs, function(err, subs) {
      Home.findById(subs.groovyid, function(err, homes) {
    Information.find(function(err, informations) {
      //if(informations.to === homes._id || informations.to === homes.city || informations.to === homes.property || informations.to === homes.cluster || informations.to === homes.blokfloor || informations.to === homes.streetname){
      console.log( informations );
       res.json(informations);
     //}
   });
 });
});
 }

});

router.get('/listcomplaint', function(req, res, next) {
  if(req.session.subs == "" || req.session.subs == null || req.session.subs == "0"){
    return res.status(404).json({
      title: "Access not found"
    });
  } else {
  var sessionSubId = req.session.subs;
    Complaint.find({sub: sessionSubId}, function(err, complaints) {
        console.log(complaints);
        res.json(complaints);
    });
  }
});
router.get('/complaint/open', function(req, res, next) {
  if(req.session.subs == "" || req.session.subs == null || req.session.subs == "0"){
    return res.status(404).json({
      title: "Access not found"
    });
  } else {
  var sessionSubId = req.session.subs;
    Complaint.findOne({sub: sessionSubId, status: 'open'}, function(err, complaints) {
        console.log(complaints);
        res.json(complaints);
    });
  }
});

var dnow = new Date();
/* Add chat */
router.post('/addchat/subs/:id', function(req, res, next) {
  if(req.session.subs == "" || req.session.subs == null || req.session.subs == "0"){
    return res.status(404).json({
      title: "Session not found"
    });
  } else {
  var chat = new Chat();
    chat.message= req.body.message;
    chat.date= dnow;
    chat.complaintId= req.params.id;
    chat.userId = req.session.subs;
    chat.userStatus ="Subscribe";
    chat.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
}
});
/* Add chat */
router.post('/addchat/helpdesk/:id', function(req, res, next) {
  if(req.session.emp == "" || req.session.emp == null || req.session.emp == "0"){
    return res.status(404).json({
      title: "Session not found"
    });
  } else {
  var chat = new Chat();
    chat.message= req.body.message;
    chat.date= dnow;
    chat.complaintId= req.params.id;
    chat.userId = req.session.emp;
    chat.userStatus ="Helpdesk";
    chat.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
}
});


/* GET detail sub. */
router.get('/id/:id', function(req, res, next) {
  if(req.session.emp == "" || req.session.emp == null || req.session.emp == "0"){
    return res.status(404).json({
      title: "Access not found"
    });
  } else {
  Sub.findById(req.params.id, function(err, subs) {
  console.log( subs );
  res.json(subs);
});
}
});

/* GET detail sub. */
router.get('/cekgroovyid/:id', function(req, res, next) {
  if(req.session.emp == "" || req.session.emp == null || req.session.emp == "0"){
    return res.status(404).json({
      title: "Access not found"
    });
  } else {
  Sub.findOne({groovyid: req.params.id}, function(err, subs) {
    if (!subs) {
        return res.status(404).json({
            title: 'No Subs',
            respcode: '98',
            error: {message: 'Subs could not be found'}
        });
    }
  res.json({
    subsaktif : 'Home already used by '+subs.name,
  });
});
}
});

/* GET detail sub. */
router.get('/subs/:id', function(req, res, next) {
  if(req.session.emp == "" || req.session.emp == null || req.session.emp == "0"){
    return res.status(404).json({
      title: "Access not found"
    });
  } else {
Sub.findOne({_id: req.params.id}, function(err, subs) {
  if(subs.groovyid == "" || subs.groovyid == null || subs.groovyid == "0" || subs.groovyid == "-- Select your no home --" || subs.groovyid == "5898330cc0d0992a46465109"){
    subs.groovyid = "59829c352e5e891b9254d04b";
  }
  Home.findOne({_id: subs.groovyid}, function(err, homes) {
    if (homes) {
        var numbhome = homes.nohome;
    }
    if (!homes) {
        var numbhome = "-";
    }
    Cluster.findOne({_id: homes.cluster}, function(err, clusters) {
      if (clusters) {
          var clustername = clusters.name;
      }
      if (!clusters) {
          var clustername = "-";
      }
     City.findOne({_id: homes.city}, function(err, cities) {
       if (cities) {
           var citiesname = cities.name;
       }
       if (!cities) {
           var citiesname = "-";
       }
    Streetname.findOne({_id: homes.streetname}, function(err, streetnames) {
      if (streetnames) {
          var streetnames_name = streetnames.name;
          var streetnames_blok = streetnames.blok;
      }
      if (!streetnames) {
        var streetnames_name = "-";
        var streetnames_blok = "-";
      }
       Package.findById(subs.idpackage, function(err, packages) {
         if (packages) {
            var packages_level = packages.level;
            var packages_price = packages.price;
            var packages_type = packages.type;
            var packages_detail = packages.detail;
          }
        if (!packages) {
           var packages_level = "-";
           var packages_price = "-";
           var packages_type = "-";
           var packages_detail = "-";
         }

            res.json({
              _id: subs._id,
              email: subs.email,
              name: subs.name,
              nova: subs.nova,
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
              ipaddr: subs.ipaddr,
              pinaltypay: subs.pinaltypay,
              idpackage: subs.idpackage,
              sales: subs.sales,
            vendorfo: subs.vendorfo,
            wifiid: subs.wifiid,
            bandwidth: subs.bandwidth,
            nova: '02750'+subs.subid.substring(2,8),
            nohome: numbhome,
            cluster: clustername,
            city: citiesname,
            address: streetnames_name,
            blok: streetnames_blok,
              packlev: packages_level,
              packprice: packages_price,
              packtype: packages_type,
              packdetail: packages_detail
          });
          });
        });
        });
      });
    });
  });
}
});

/* GET detail sub. */
router.get('/detailsub', function(req, res, next) {
      if(req.session.subs == "" || req.session.subs == null || req.session.subs == "0"){
        return res.status(404).json({
          title: "No user Please Signin"
        });
      } else {
        var sessionSubId = req.session.subs;
  Sub.findOne({_id: sessionSubId}, function(err, subs) {
    if(subs.groovyid == "" || subs.groovyid == null || subs.groovyid == "0"){
      subs.groovyid = "59829c352e5e891b9254d04b";
    }
    Home.findOne({_id: subs.groovyid}, function(err, homes) {
      if (homes) {
          var numbhome = homes.nohome;
      }
      if (!homes) {
          var numbhome = "-";
      }
      Cluster.findOne({_id: homes.cluster}, function(err, clusters) {
        if (clusters) {
            var clustername = clusters.name;
        }
        if (!clusters) {
            var clustername = "-";
        }
        Streetname.findOne({_id: homes.streetname}, function(err, streetnames) {
          if (streetnames) {
              var streetnames_name = streetnames.name;
              var streetnames_blok = streetnames.blok;
          }
          if (!streetnames) {
            var streetnames_name = "-";
            var streetnames_blok = "-";
          }
       City.findOne({_id:homes.city}, function(err, cities) {
         if (cities) {
             var citiesname = cities.name;
         }
         if (!cities) {
             var citiesname = "-";
         }
         Package.findById(subs.idpackage, function(err, packages) {
           if (packages) {
             var packages_level = packages.level;
             var packages_price = packages.price;
             var packages_type = packages.type;
             var packages_detail = packages.detail;
            }
          if (!packages) {
             var packages_level = "-";
             var packages_price = "-";
             var packages_type = "-";
             var packages_detail = "-";
           }
              res.json({
                _id: subs._id,
                email: subs.email,
                name: subs.name,
                phone: subs.phone,
                status: subs.status,
                datebirth: subs.datebirth,
                idnumber: subs.idnumber,
                subid: subs.subid,
                dateinst: subs.dateinst,
                timeinst: subs.timeinst,
                regisby: subs.regisby,
                regisref: subs.regisref,
                nova: '02750'+subs.subid.substring(2,8),
                activedate: subs.activedate,
                promo: subs.promo,
                wifiid: subs.wifiid,
                nohome: numbhome,
                cluster: clustername,
                city: citiesname,
                address: streetnames_name,
                blok: streetnames_blok,
                  packlev: packages_level,
                  packprice: packages_price,
                  packtype: packages_type,
                  packdetail: packages_detail,
                sales: subs.sales
                  });
              });
            });
          });
        });
      });
  });
      }
});


/* GET detail bill one account. */
router.get('/bill', function(req, res, next) {
  if(req.session.subs == "" || req.session.subs == null || req.session.subs == "0"){
    return res.status(404).json({
      title: "Access not found"
    });
  } else {
var sessionSubId = req.session.subs;
Bill.find({sub: sessionSubId}, function(err, bills) {
       console.log( bills );
       res.json(bills);
   });
 }
});

/* GET billloye listing. */
router.get('/listbill/sub/:id', function(req, res, next) {
  if(req.session.emp == "" || req.session.emp == null || req.session.emp == "0"){
    return res.status(404).json({
      title: "Access not found"
    });
  } else {
     Bill.find({sub: req.params.id}, function(err, bills) {
       console.log( bills );
       res.json(bills);
   });
 }
});

/* GET detail bill. */
router.get('/idbill/:id', function(req, res, next) {
Bill.findOne({_id: req.params.id}, function(err, bills) {
  Sub.findById(bills.sub, function(err, subs) {
    if(subs.groovyid == "" || subs.groovyid == null || subs.groovyid == "0"){
      subs.groovyid = "59829c352e5e891b9254d04b";
    }
    Home.findById(subs.groovyid, function(err, homes) {
      if (homes) {
          var numbhome = homes.nohome;
      }
      if (!homes) {
          var numbhome = "-";
      }
      Cluster.findById(homes.cluster, function(err, clusters) {
        if (clusters) {
            var clustername = clusters.name;
        }
        if (!clusters) {
            var clustername = "-";
        }
      Streetname.findById(homes.streetname, function(err, streetnames) {
        if (streetnames) {
              var streetnames_name = streetnames.name;
              var streetnames_blok = streetnames.blok;
          }
          if (!streetnames) {
            var streetnames_name = "-";
            var streetnames_blok = "-";
          }
       City.findById(homes.city, function(err, cities) {
         if (cities) {
             var citiesname = cities.name;
         }
         if (!cities) {
             var citiesname = "-";
         }
            res.json({
              _id: subs._id,
              noinvoice: bills.noinvoice,
              namepack: bills.namepack,
              pricepack: bills.pricepack,
              priceinstal: bills.priceinstal,
              pricerouter: bills.pricerouter,
              pricestb: bills.pricestb,
              noinvoice: bills.noinvoice,
              promoname: bills.promoname,
              pricepromo: bills.pricepromo,
              pricerj45cable: bills.pricerj45cable,
              pinalty: bills.pinalty,
              changetax: bills.changetax,
              totalprice: bills.totalprice,
              totalpay: bills.totalpay,
              billdate: bills.billdate,
              duedate: bills.duedate,
              paydate: bills.paydate,
              status: bills.status,
              desc: bills.desc,
              name: subs.name,
              subid: subs.subid,
              nova: '02750'+subs.subid.substring(2,8),
              statussub: subs.status,
              pinaltypay: subs.pinaltypay,
              address: streetnames_name,
              blok: streetnames_blok,
              nohome: numbhome,
              cluster: clustername,
              city: citiesname
            });
          });
        });
      });
      });
    });
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
    sub.status= 'Registration';
    sub.regisby= 'Personal';
    sub.regisref= req.body.regisref;
    sub.sales= 'No';
    sub.groovyid= req.body.groovyid;
    sub.idnumber= req.body.idnumber;
    sub.datebirth= req.body.datebirth;
    sub.codeactivation = codeactivation;
    sub.idpackage= req.body.package;
    sub.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
      var mailOptions={
      to: req.body.email,
      subject : "Activate Your Groovy Account",
      html : `
        <body style="font-family:Arial;font-size:15px;">
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
                    <a href="http://202.162.207.164:3000/activation/`+codeactivation+`" style="padding:12px 50px 12px 50px;font-size:14px;border-radius:3px;background-color:#FC592E;color:#fff;text-decoration:none;box-shadow:1px 1px 5px #999;">CONFIRM EMAIL</a>
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

/* Add sub */
router.post('/addsubs', function(req, res, next) {
  if(req.session.emp == "" || req.session.emp == null || req.session.emp == "0"){
    return res.status(404).json({
      title: "Session not found"
    });
  } else {
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
    sub.status= 'Registration';
    sub.regisby= 'CS/Sales';
    sub.regisref= req.body.regisref;
    sub.sales= req.body.sales;
    sub.groovyid= req.body.groovyid;
    sub.idnumber= req.body.idnumber;
    sub.datebirth= req.body.datebirth;
    sub.codeactivation = codeactivation;
    sub.idpackage= req.body.package;
    sub.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
}
});

router.put('/putsub/:id', function(req, res, next) {
  if(req.session.emp == "" || req.session.emp == null || req.session.emp == "0"){
    return res.status(404).json({
      title: "Session not found"
    });
  } else {
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
                sub.package= req.body.package;
              if (err)
                res.send(err);

            sub.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
    }
});

router.put('/editgroovyid/:id', function(req, res, next) {
  if(req.session.emp == "" || req.session.emp == null || req.session.emp == "0"){
    return res.status(404).json({
      title: "Session not found"
    });
  } else {
        Sub.findById(req.params.id, function(err, sub) {

            if (err)
                res.send(err);
                sub.groovyid= req.body.groovyid;
              if (err)
                res.send(err);

            sub.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
      }
});

/* GET detail sub. */
router.get('/activationid/:id', function(req, res, next) {
  Sub.findOne({codeactivation: req.params.id}, function(err, subs) {
  console.log( subs );
  res.json(subs);
});
});

/* GET detail sub. */
router.post('/is/logout', function(req, res, next) {
  req.session.emp = null;
  res.json({ message: 'logout' });
});

/* GET detail sub. */
router.post('/my/logout', function(req, res, next) {
  req.session.subs = null;
  res.json({ message: 'logout' });
});
router.put('/activationemail/:id', function(req, res, next) {

        Sub.findOne({codeactivation: req.params.id}, function(err, sub) {

            if (err)
                res.send(err);
                sub.status= 'Email Activation';
                sub.password= passwordHash.generate(req.body.password);
              if (err)
                res.send(err);

            sub.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.put('/activationaccount/:id', function(req, res, next) {
  if(req.session.emp == "" || req.session.emp == null || req.session.emp == "0"){
    return res.status(404).json({
      title: "Session not found"
    });
  } else {
        Sub.findOne({_id: req.params.id}, function(err, sub) {

            if (err)
                res.send(err);
                sub.status= req.body.status;
              if (err)
                res.send(err);

            sub.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
    }
});

router.put('/updatepackage/:id', function(req, res, next) {
  if(req.session.emp == "" || req.session.emp == null || req.session.emp == "0"){
    return res.status(404).json({
      title: "Session not found"
    });
  } else {
        Sub.findOne({_id: req.params.id}, function(err, sub) {

            if (err)
                res.send(err);
                sub.idpackage= req.body.idpackage;
              if (err)
                res.send(err);

            sub.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
      }
});

router.put('/updatesubs/:id', function(req, res, next) {
  if(req.session.emp == "" || req.session.emp == null || req.session.emp == "0"){
    return res.status(404).json({
      title: "Session not found"
    });
  } else {
        Sub.findOne({_id: req.params.id}, function(err, sub) {

            if (err)
                res.send(err);
                sub.name= req.body.name;
                sub.email= req.body.email;
                sub.phone= req.body.phone;
                sub.idnumber= req.body.idnumber;
                sub.datebirth= req.body.datebirth;
                sub.regisby= req.body.regisby;
                sub.regisref= req.body.regisref;
                sub.sales= req.body.sales;
                sub.vendorfo = req.body.vendorfo;
                sub.wifiid = req.body.wifiid;
                sub.ipaddr = req.body.ipaddr;
                sub.bandwidth = req.body.bandwidth;
              if (err)
                res.send(err);

            sub.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
    }
});

router.delete('/delsub/:id', function(req, res, next) {
  if(req.session.emp == "" || req.session.emp == null || req.session.emp == "0"){
    return res.status(404).json({
      title: "Session not found"
    });
  } else {
        Sub.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
 }
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
           return res.status(404).json('User could not be found');
        }

        /*if (!doc) {
           return res.status(404).json({
               title: "No user found",
               error: {message: 'User could not be found.'}
            });
        }*/

        if (!passwordHash.verify(req.body.password, doc.password)){
            return res.status(404).json('Invalid password');
        }

        /*if (!passwordHash.verify(req.body.password, doc.password)) {
            if (err) {
                return res.status(404).json({
                    title: "Could not sign user in",
                    error: {message: 'Invalid Password'}
                });
            }
        }*/

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
});

router.post('/login', function(req, res, next){
    Emp.findOne({email: req.body.email}, function(err, doc){
        if (err) {
            return res.status(404).json({
                title: 'An error occured',
                error: err
            });
        }

        if (!doc) {
            return res.status(404).json(
                'User could not be found'
            );
        }

        if (!passwordHash.verify(req.body.password, doc.password)){
            return res.status(404).json(
                'Invalid password'
            );
        }

        /*if (!doc) {
            return res.status(404).json({
                title: 'No user found',
                error: {message: 'User could not be found'}
            });
        }*/

        /*if (!passwordHash.verify(req.body.password, doc.password)){
            return res.status(404).json({
                title: 'Could not sign you in',
                error: {message: 'Invalid password'}
            });
        }*/

        var token = jwt.sign({emp:doc}, 'secret', {expiresIn: 7200});

        if(!req.session.emp){
            req.session.emp = doc.id;
            req.session.level = doc.id;
        }

        res.status(200).json({
            message: 'Success',
            token: token,
            sessionId: doc.id,
        })
    })
});


module.exports = router;
