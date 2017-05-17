var express = require('express');
var router = express.Router();
var Bill = require('../models/bill');
var Sub = require('../models/subs');
var randomInt = require('random-int');
var City = require('../models/city');
var Cluster = require('../models/cluster');
var Home = require('../models/home');

/* GET billloye listing. */
router.get('/listbill', function(req, res, next) {
     Bill.find(function(err, bills) {
       console.log( bills );
       res.json(bills);

   });
});

/* GET billloye listing. */
router.get('/listbill/sub/:id', function(req, res, next) {
     Bill.find({sub: req.params.id}, function(err, bills) {
       console.log( bills );
       res.json(bills);

   });
});

/* GET detail bill. */
router.get('/idbill/:id', function(req, res, next) {
Bill.findOne({_id: req.params.id}, function(err, bills) {
  Sub.findById(bills.sub, function(err, subs) {
    Home.findById(subs.groovyid, function(err, homes) {
      Cluster.findById(homes.cluster, function(err, clusters) {
       City.findById(homes.city, function(err, cities) {
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
              nova: subs.nova,
              statussub: subs.status,
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

/* Add bill */
router.post('/addbill', function(req, res, next) {
  var bill = new Bill();
    bill.noinvoice= randomInt(100000000, 9999999999);
    bill.namepack= req.body.namepack;
    bill.pricepack= req.body.pricepack;
    bill.priceinstal= req.body.priceinstal;
    bill.pricerouter= req.body.pricerouter;
    bill.pricestb= req.body.pricestb;
    bill.pricerj45cable= req.body.pricerj45cable;
    bill.promoname= req.body.promoname;
    bill.pricepromo= req.body.pricepromo;
    bill.billid= req.body.billid;
    bill.propertiname= req.body.propertiname;
    bill.changetax= req.body.changetax;
    bill.pinalty= req.body.pinalty;
    bill.totalprice= req.body.totalprice;
    bill.totalpay= req.body.totalpay;
    bill.billdate= req.body.billdate;
    bill.duedate= req.body.duedate;
    bill.paydate= req.body.paydate;
    bill.status= req.body.status;
    bill.desc= req.body.desc;
    bill.sub= req.body.sub;
    bill.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

router.put('/putbill/:id', function(req, res, next) {

        Bill.findById(req.params.id, function(err, bill) {

            if (err)
                res.send(err);

                bill.idinvoice= req.body.idinvoice;
                bill.namepack= req.body.namepack;
                bill.pricepack= req.body.pricepack;
                bill.priceinstal= req.body.priceinstal;
                bill.pricerouter= req.body.pricerouter;
                bill.pricestb= req.body.pricestb;
                bill.pricerj45cable= req.body.pricerj45cable;
                bill.promoname= req.body.promoname;
                bill.pricepromo= req.body.pricepromo;
                bill.billid= req.body.billid;
                bill.propertiname= req.body.propertiname;
                bill.changetax= req.body.changetax;
                bill.pinalty= req.body.pinalty;
                bill.totalprice= req.body.totalprice;
                bill.totalpay= req.body.totalpay;
                bill.billdate= req.body.billdate;
                bill.duedate= req.body.duedate;
                bill.paydate= req.body.paydate;
                bill.status= req.body.status;
                bill.sub= req.body.sub;
              if (err)
                res.send(err);

            bill.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.put('/paymentconfrim/:id', function(req, res, next) {

        Bill.findById(req.params.id, function(err, bill) {
          Sub.findById(bill.sub, function(err, subs) {
            if (err)
                res.send(err);
                subs.pinaltypay= req.body.pinaltypay;
                bill.paydate= req.body.paydate;
                bill.status= 'Paid';
              if (err)
                res.send(err);

            bill.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
            subs.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
    });
});

router.delete('/delbill/:id', function(req, res, next) {
        Bill.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

module.exports = router;
