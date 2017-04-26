var express = require('express');
var router = express.Router();
var Chat = require('../models/chatcomplaint');
//var Complaint = require('../models/complaint');                                                                    = require('../models/complaint');

/* GET chatloye listing. */
router.get('/listchat', function(req, res, next) {
     Chat.find(function(err, chats) {
       console.log( chats );
       res.json(chats);
   });
});

/* GET detail bill one account. */
router.get('/chat/:id', function(req, res, next) {
Chat.find({complaint: req.params.id}, function(err, chatcomplaints) {
       console.log( chatcomplaints );
       res.json(chatcomplaints);
   });
});

/* Add chat */
router.post('/addchat', function(req, res, next) {
  var chat = new Chat();
    chat.message= req.body.message;
    chat.date= req.body.date;
    chat.sub= req.body.sub;
    chat.emp= req.body.emp;
    chat.complaint= req.body.complaint;

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
                chat.complaint= req.body.complaint;

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
