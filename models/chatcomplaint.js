var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Emp = require('../models/employee');
var Sub = require('../models/subs');

var ChatSchema   = new Schema({
  message: String,
  date: String,
  sub: {type: Schema.Types.ObjectId, ref: 'Sub'},
  emp: {type: Schema.Types.ObjectId, ref: 'Emp'},
  complaintId: String,
});

module.exports = mongoose.model('Chat', ChatSchema);
