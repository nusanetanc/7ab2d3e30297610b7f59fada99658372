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

    bill.billid= req.body.billid;
    bill.propertiname= req.body.propertiname;
    bill.type= req.body.type;
    //bill.passwth= req.body.datebrith;
    bill.blokfloor= req.body.blokfloor;
    bill.nobill= req.body.nobill;
    bill.city= req.body.city;
    bill.fo= req.body.fo;

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

                bill.billid= req.body.billid;
                bill.propertiname= req.body.propertiname;
                bill.type= req.body.type;
                //bill.passwth= req.body.datebrith;
                bill.blokfloor= req.body.blokfloor;
                bill.nobill= req.body.nobill;
                bill.city= req.body.city;
                bill.fo= req.body.fo;
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
