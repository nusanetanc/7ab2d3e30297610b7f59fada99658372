var express = require('express');
var router = express.Router();
var Complaint = require('../models/complaint');
var Chat = require('../models/chatcomplaint');
var Sub = require('../models/subs')

/* GET complaintloye listing. */
router.get('/listcomplaint', function(req, res, next) {
     Complaint.find(function(err, complaints) {
       console.log( complaints );
       res.json(complaints);
   });
});

/* GET detail complaint. */
router.get('/complaint/:id', function(req, res, next) {
Complaint.findOne({complaintId: req.params.id}, function(err, complaints) {
        res.json({
            _id: complaints._id,
            complaintId: complaints.complaintId,
            subject: complaints.subject,
            category: complaints.category,
            subcategory: complaints.subcategory,
            dateopen: complaints.dateopen,
            dateclose: complaints.dateclose,
            status: complaints.status,
            lastchat: complaints.lastchat,
    });
   });
});

router.get('/:id', function(req, res, next) {
    Complaint.find({sub: req.params.id}, function(err, complaints) {
        console.log(complaints);
        res.json(complaints);
    });
});

/* Add complaint */
var id = require('node-sid')({
    seed:'0123456789abcdefghijklmnopqrstuvwxyz',
    len:20,
    headerField:'x-node-sid'
}).create();
var dnow = new Date();
router.post('/addcomplaint', function(req, res, next) {
    var complaint = new Complaint();
    complaint.complaintId = id;
    complaint.category= req.body.category;
    complaint.subcategory= req.body.subcategory;
    complaint.status= "open";
    complaint.dateopen= dnow;
    complaint.lastchat= dnow;
    complaint.sub= "58b3cdac45912d052e2c85a5";

    complaint.save(function(err) {
      if (err)
          res.send(err);
          res.json({ message: 'Data created!' });
      });
});

router.post('/addchat', function(req, res, next) {
    var chat = new Chat();
    chat.message= req.body.message;
    chat.date= dnow;
    chat.complaintId= id;
    chat.userId = "58b3cdac45912d052e2c85a5";
    chat.userStatus ="Subscribe";

    chat.save(function(err) {
        if (err)
            res.send(err);
            res.json({ message: 'Data created!' });
        });
});

router.put('/putcomplaint/:id', function(req, res, next) {

        Complaint.findById(req.params.id, function(err, complaint) {

            if (err)
                res.send(err);

                complaint.subject= req.body.subject;
                complaint.category= req.body.category;
                complaint.subcategory= req.body.subcategory;
                complaint.dateopen= req.body.dateopen;
                complaint.dateclose= req.body.dateclose;
                complaint.status= req.body.status;
                complaint.lastchat= req.body.lastchat;
              if (err)
                res.send(err);

            complaint.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.put('/close/:id', function(req, res, next) {

        Complaint.findById(req.params.id, function(err, complaint) {

            if (err)
                res.send(err);

                complaint.dateclose= new Date();
                complaint.status= 'close';
              if (err)
                res.send(err);

            complaint.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.delete('/delcomplaint/:id', function(req, res, next) {
        Complaint.remove({
            _id: req.params.id
        }, function(err, complaint) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

module.exports = router;
