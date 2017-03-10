var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Complaint = require('../models/complaint');
var Emp = require('../models/employee');
var Sub = require('../models/subs');

var ChatSchema   = new Schema({
  message: String,
  date: Date,
  sub: {type: Schema.Types.ObjectId, ref: 'Sub'},
  emp: {type: Schema.Types.ObjectId, ref: 'Emp'},
  complaint: {type: Schema.Types.ObjectId, ref: 'Complaint'}
});

module.exports = mongoose.model('Chat', ChatSchema);
