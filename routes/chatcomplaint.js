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

/* GET detail chat. */
router.get('/chat/:id', function(req, res, next) {
Chat.findById(req.params.id, function(err, chats) {
       console.log( chats );
       res.json(chats);
   });
});

/* Add chat */
router.post('/addchat', function(req, res, next) {
  var chat = new Chat();
    chat.message= req.body.message;
    chat.date= req.body.date;

    Chat.save(function(err) {
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
              if (err)
                res.send(err);

            Chat.save(function(err) {
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
