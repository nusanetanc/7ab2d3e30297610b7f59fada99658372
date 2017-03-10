var express = require('express');
var router = express.Router();
var Complaint = require('../models/complaint');

/* GET complaintloye listing. */
router.get('/listcomplaint', function(req, res, next) {
     Complaint.find(function(err, complaints) {
       console.log( complaints );
       res.json(complaints);
   });
});

/* GET detail complaint. */
router.get('/complaint/:id', function(req, res, next) {
Complaint.findById(req.params.id, function(err, complaints) {
       console.log( complaints );
       res.json(complaints);
   });
});

/* Add complaint */
router.post('/addcomplaint', function(req, res, next) {
  var complaint = new Complaint();
    complaint.sub= req.body.sub;
    complaint.subject= req.body.subject;
    complaint.category= req.body.category;
    complaint.subcategory= req.body.subcategory;
    complaint.dateopen= req.body.dateopen;
    complaint.dateclose= req.body.dateclose;
    complaint.status= req.body.status;
    complaint.lastchat= req.body.lastchat;

    complaint.save(function(err) {
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
