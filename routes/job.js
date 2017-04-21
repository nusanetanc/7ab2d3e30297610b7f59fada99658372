var express = require('express');
var router = express.Router();
var Job = require('../models/job');

/* GET jobs listing. */
router.get('/listjob', function(req, res, next) {
     Job.find(function(err, jobs) {
       console.log( jobs );
       res.json(jobs);
   });
});

/* GET detail jobs. */
router.get('/job/:id', function(req, res, next) {
Job.findById(req.params.id, function(err, jobs) {
       console.log( jobs );
       res.json(jobs);
   });
});

/* GET detail jobs. */
router.get('/emp/:emp', function(req, res, next) {
Job.find({emp1: req.params.emp}, function(err, jobs) {
       console.log( jobs );
       res.json(jobs);
   });
});

/* Add job */
router.post('/addjob', function(req, res, next) {
  var job = new Job();
    job.name= req.body.name;
    job.detail= req.body.detail;
    job.date= req.body.date;
    job.status= 'On Progress';
    job.emp1= req.body.emp1;
    job.emp2= req.body.emp2;
    job.subs= req.body.subs;
    job.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});


module.exports = router;
