var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Emp = require('../models/employee');
var Sub = require('../models/subs');

var ChatSchema   = new Schema({
  message: String,
  date: Date,
  userStatus: String,
  userId: String,
  complaintId: String,
});

module.exports = mongoose.model('Chat', ChatSchema);
