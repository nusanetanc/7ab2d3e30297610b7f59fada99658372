var express = require('express');
var router = express.Router();
var Cluster = require('../models/cluster');

/* GET clusterloye listing. */
router.get('/listcluster', function(req, res, next) {
     Cluster.find(function(err, clusters) {
       console.log( clusters );
       res.json(clusters);
   });
});

/* GET detail cluster. */
router.get('/cluster/:id', function(req, res, next) {
Cluster.findById(req.params.id, function(err, clusters) {
       console.log( clusters );
       res.json(clusters);
   });
});

/* Add cluster */
router.post('/addcluster', function(req, res, next) {
  var cluster = new Cluster();
    cluster.name= req.body.name;
    cluster.typeproperty= req.body.typeproperty;

    cluster.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

router.put('/putcluster/:id', function(req, res, next) {

        Cluster.findById(req.params.id, function(err, cluster) {

            if (err)
                res.send(err);

                cluster.name= req.body.name;
              if (err)
                res.send(err);

            cluster.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.delete('/delcluster/:id', function(req, res, next) {
        Cluster.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

module.exports = router;
