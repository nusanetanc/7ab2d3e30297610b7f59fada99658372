var express = require('express');
var router = express.Router();
var Goods = require('../models/goods');

/* GET jobs listing. */
router.get('/list', function(req, res, next) {
     Goods.find(function(err, goods) {
       console.log( goods );
       res.json(goods);
   });
});

/* Add job */
router.post('/add', function(req, res, next) {
  var goods = new Goods();

    goods.name= req.body.name;
    goods.stock= req.body.stock;

    goods.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});
router.delete('/del/:id', function(req, res, next) {
        Goods.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

module.exports = router;
