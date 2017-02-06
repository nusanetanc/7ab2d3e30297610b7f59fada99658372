var express = require('express');
var router = express.Router();
var Bill = require('../models/bill');


/* GET billloye listing. */
router.get('/listbill', function(req, res, next) {
     Bill.find(function(err, bills) {
       console.log( bills );
       res.json(bills);
   });
});

/* GET detail bill. */
router.get('/bill/:id', function(req, res, next) {
Bill.findById(req.params.id, function(err, bills) {
       console.log( bills );
       res.json(bills);
   });
});

/* Add bill */
router.post('/addbill', function(req, res, next) {
  var bill = new Bill();
    bill.noinvoice= req.body.noinvoice;
    bill.pricepack= req.body.pricepack;
    bill.priceinstal= req.body.priceinstal;
    bill.pricerouter= req.body.pricerouter;
    bill.pricestb= req.body.pricestb;
    bill.promoname= req.body.promoname;
    bill.pricepromo= req.body.pricepromo;
    bill.billid= req.body.billid;
    bill.propertiname= req.body.propertiname;
    bill.changetax= req.body.changetax;
    bill.total= req.body.total;
    bill.billdate= req.body.billdate;
    bill.duedate= req.body.duedate;
    bill.paydate= req.body.paydate;
    bill.status= req.body.status;
    Bill.save(function(err) {
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
                bill.pricepack= req.body.pricepack;
                bill.priceinstal= req.body.priceinstal;
                bill.pricerouter= req.body.pricerouter;
                bill.pricestb= req.body.pricestb;
                bill.promoname= req.body.promoname;
                bill.pricepromo= req.body.pricepromo;
                bill.billid= req.body.billid;
                bill.propertiname= req.body.propertiname;
                bill.changetax= req.body.changetax;
                bill.total= req.body.total;
                bill.billdate= req.body.billdate;
                bill.duedate= req.body.duedate;
                bill.paydate= req.body.paydate;
                bill.status= req.body.status;
              if (err)
                res.send(err);

            bill.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
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
