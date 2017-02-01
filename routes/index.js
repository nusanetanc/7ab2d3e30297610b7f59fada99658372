var express = require('express');
var subdomain = require('express-subdomain');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.use(subdomain('api', router));
module.exports = router;
