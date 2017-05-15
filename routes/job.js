var express = require('express');
var router = express.Router();
var Job = require('../models/job');
var Sub = require('../models/subs');

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
Sub.findById(jobs.subs, function(err, subs) {
    res.json({
        _id: jobs._id,
        name: jobs.name,
        detail: jobs.detail,
        date: jobs.date,
        subname: subs.name,
        submail: subs.mail,
        subphone: subs.phone,
        subcardid: subs.idnumber,
        subbirth: subs.datebirth,
    });
   });
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
router.delete('/deljob/:id', function(req, res, next) {
        Job.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

module.exports = router;
