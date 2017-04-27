var express = require('express');
var router = express.Router();
var Stock = require('../models/stock');

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
