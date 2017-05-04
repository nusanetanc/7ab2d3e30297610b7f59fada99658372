var express = require('express');
var router = express.Router();
var Chat = require('../models/chatcomplaint');
var Sub = require('../models/subs');
var Emp = require('../models/employee');
//var Complaint = require('../models/complaint');                                                                    = require('../models/complaint');

/* GET chatloye listing. */
router.get('/listchat', function(req, res, next) {
     Chat.find(function(err, chats) {
       console.log( chats );
       res.json(chats);
   });
});


router.get('/chat/:complaint', function(req, res, next) {
    Chat.find({$or: [{complaintId: req.params.complaint}, {sub: "58b3cdac45912d052e2c85a5"}, {emp: "58b6a0d77dfd7052a9fe53c9"} ]}, function(err, chats) {
        Sub.findById(chats.sub, function(err, sub) {
        Emp.findById(chats.emp, function(err, emp) {
            res.json({
                message: chats.message,
                date: chats.date,
                complaintId: chats.complaintId,
                subname: sub.name,
                empname: emp.name,
            });
        });
        });
    });
});


/* Add chat */
router.post('/addchat', function(req, res, next) {
  var chat = new Chat();
    chat.message= req.body.message;
    chat.date= req.body.date;
    chat.sub= req.body.sub;
    chat.emp= req.body.emp;
    chat.complaintId= req.body.complaintId;

    chat.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Data created!' });
  });
});

router.put('/putchat/:id', function(req, res, next) {

        Chat.findById(req.params.id, function(err, chat) {

            if (err)
                res.send(err);

                chat.message= req.body.message;
                chat.date= req.body.date;
                chat.sub= req.body.sub;
                chat.emp= req.body.emp;
                chat.complaintId= req.body.complaintId;

              if (err)
                res.send(err);

            chat.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Data updated!' });
            });
        });
});

router.delete('/delchat/:id', function(req, res, next) {
        Chat.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
   });
});

module.exports = router;
