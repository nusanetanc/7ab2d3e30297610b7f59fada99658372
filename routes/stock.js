var express = require('express');
var router = express.Router();
var Stock = require('../models/stock');
var City = require('../models/city');
var Cluster = require('../models/cluster');
var Sub = require('../models/subs');
var Home = require('../models/home');
var Goods = require('../models/goods');

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

/* GET jobs listing. */
router.get('/detail/:id', function(req, res, next) {
     Stock.find({goods: req.params.id}, function(err, stocks) {
       Sub.find({_id: "58b3cdac45912d052e2c85a5"}, function(err, subs) {
         if(subs.groovyid == "" || subs.groovyid == null || subs.groovyid == "0"){
           subs.groovyid = "5898330cc0d0992a46465109";
         }
       Goods.find({_id: stocks.goods}, function(err, goods) {
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
                       goodsname: goods.name,
                       barcode: stocks.barcode,
                       status: stocks.status,
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

        Stock.findById(req.params.id, function(err, stock) {

            if (err)
                res.send(err);

                stock.goods= req.body.goods;
                stock.barcode= req.body.barcode;
                stock.status= req.body.status;
                stock.subs= req.body.subs;
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
