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
      Stock.findOne({_id: req.params.id}, function(err, stocks) {
                      res.json({
                       barcode: stocks.barcode,
                       subs: stocks.subs
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
