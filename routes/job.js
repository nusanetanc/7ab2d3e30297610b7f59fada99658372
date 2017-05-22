var express = require('express');
var router = express.Router();
var Job = require('../models/job');
var Sub = require('../models/subs');
var Emp = require('../models/employee');

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
            Emp.findById(jobs.emp1, function(err, emps1) {
                Emp.findById(jobs.emp2, function(err, emps2) {
                    res.json({
                        _id: jobs._id,
                        name: jobs.name,
                        detail: jobs.detail,
                        date: jobs.date,
                        report: jobs.report,
                        status: jobs.status,
                        subname: subs.name,
                        submail: subs.email,
                        subphone: subs.phone,
                        subcardid: subs.idnumber,
                        subbirth: subs.datebirth,
                        substreet: subs.address,
                        subnohome: subs.nohome,
                        subnohome: subs.nohome,
                        subcluster: subs.cluster,
                        subcity: subs.city,
                        subid: subs.subid,
                        emp1: emps1.name,
                        emp2: emps2.name,

                    });
                });
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

/*Add report job*/
router.put('/report/:id', function(req, res, next){
    Job.findById(req.params.id, function(err, job) {
        if (err)
            res.send(err);

        job.report= req.body.report;
        job.status= 'Done';
        if (err)
            res.send(err);

        job.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Data updated!' });
        });
    });
});
module.exports = router;
