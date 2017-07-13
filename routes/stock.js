var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var Stock = require('../models/stock');
var City = require('../models/city');
var Cluster = require('../models/cluster');
var Job = require('../models/job');
var Sub = require('../models/subs');
var Home = require('../models/home');
var Goods = require('../models/goods');
var Emp = require('../models/employee');


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

/* GET jobs listing. */
router.get('/list', function(req, res, next) {
     Stock.find(function(err, stocks) {
       console.log( stocks );
       res.json(stocks);
   });
});

/* GET jobs listing. */
router.get('/goods/:id', function(req, res, next) {
     Stock.find({goods: req.params.id}, function(err, stocks) {
       console.log( stocks );
       res.json(stocks);
   });
});

router.get('/jobs/:id', function(req, res, next) {
     Stock.find({jobs: req.params.id}, function(err, stocks) {
       console.log( stocks );
       res.json(stocks);
   });
});

router.get('/id/:id', function(req, res, next) {
      Stock.findOne({_id: req.params.id}, function(err, stocks) {
        console.log( stocks );
        res.json(stocks);
  });
});

/* GET jobs listing. */
router.get('/detail/:id', function(req, res, next) {
      Stock.findOne({_id: req.params.id}, function(err, stocks) {
        Goods.findOne({_id: stocks.goods}, function(err, goods) {
          Job.findOne({_id: stocks.jobs}, function(err, jobs) {
          Sub.findOne({_id: jobs.subs}, function(err, subs) {
            Home.findOne({_id: subs.groovyid}, function(err, homes) {
              Cluster.findOne({_id:homes.cluster}, function(err, clusters) {
                City.findOne({_id:homes.city}, function(err, cities) {
                      res.json({
                      goodsid: stocks.goods,
                       barcode: stocks.barcode,
                       status: stocks.status,
                       goodsname: goods.name,
                       name: subs.name,
                       subid: subs.subid,
                       nova: subs.nova,
                       address: homes.address,
                       nohome: homes.nohome,
                       cluster: clusters.name,
                       city: cities.name,
                       jobname: jobs.name,
                       emp1: jobs.emp1,
                       emp2: jobs.emp2
                     });
                    });
                  });
                });
              });
            });
          });
        });
      });


/* Add job */
router.post('/add', function(req, res, next) {
  var stock = new Stock();
    stock.goods= req.body.goods;
    stock.barcode= req.body.barcode;
    stock.status= "onstock";
    stock.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

router.put('/put/:id', function(req, res, next) {

        Stock.findOne({barcode: req.params.id}, function(err, stock) {

            if (err)
                res.send(err);

                stock.barcode= req.body.barcode;
                stock.status= "inuse";
                stock.jobs= req.body.jobs;
              if (err)
                res.send(err);

            stock.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});
router.delete('/del/:id', function(req, res, next) {
        Stock.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

module.exports = router;
