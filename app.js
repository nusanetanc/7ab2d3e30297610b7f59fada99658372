var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/groovy');

var index = require('./routes/index');
var subscribe = require('./routes/subs');
var employee = require('./routes/employee');
//var home = require('./routes/home');
var package = require('./routes/package');
var complaint = require('./routes/complaint');
var chatcomplaint = require('./routes/chatcomplaint');
var modul = require('./routes/modul');
var bill = require('./routes/bill');
var city = require('./routes/city');

//var proprety = require('./routes/proprety');
//var type = require('./routes/type');
//var cluster = require('./routes/cluster');
//var blokfloor = require('./routes/blokfloor');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/subscribe', subscribe);
app.use('/employee', employee);
//app.use('/home', home);
app.use('/package', package);
app.use('/complaint', complaint);
app.use('/chatcomplaint', chatcomplaint);
app.use('/modul', modul);
app.use('/bill', bill);
app.use('/city', city);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
