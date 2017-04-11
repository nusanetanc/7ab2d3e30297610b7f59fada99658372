var express = require('express');
var router = express.Router();
var Problem = require('../models/problem');

/* GET cityloye listing. */
router.get('/listproblem', function(req, res, next) {
     Problem.find(function(err, problems) {
       console.log( problems );
       res.json(problems);
   });
});

/* GET detail city. */
router.get('/problem/:id', function(req, res, next) {
Problem.findById(req.params.id, function(err, problems) {
       console.log( problems );
       res.json(problems);
   });
});

/* GET problem by category. */
router.get('/problem/category/:category', function(req, res, next) {
    Problem.find({category: req.params.category}, function(err, problems) {
        console.log( problems );
        res.json(problems);
    });
});

/* Add city */
router.post('/addproblem', function(req, res, next) {
  var problem = new Problem();
    problem.category= req.body.category;
    problem.subcategory= req.body.subcategory;
    problem.desc= req.body.desc;

    problem.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

router.put('/putproblem/:id', function(req, res, next) {

        Problem.findById(req.params.id, function(err, problem) {

            if (err)
                res.send(err);

                problem.subcategory= req.body.subcategory;
                problem.desc= req.body.desc;
              if (err)
                res.send(err);

            problem.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.delete('/delproblem/:id', function(req, res, next) {
        Problem.remove({
            _id: req.params.id
        }, function(err, problem) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

/* GET detail city. */
router.post('/desc', function(req, res, next) {
Problem.findOne({subcategory: req.body.subcategory}, function(err, descproblems) {
       console.log( descproblems );
       res.json(descproblems);
   });
});

module.exports = router;
