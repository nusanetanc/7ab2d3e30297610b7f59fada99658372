var express = require('express');
var router = express.Router();

/* GET is groovy. */
router.get('/is', function(req, res, next) {
  res.render('is', { title: 'Groovy - IS' });
});
module.exports = router;
