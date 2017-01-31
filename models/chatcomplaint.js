var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Complaint = require('../models/complaint');

var ChatSchema   = new Schema({
  Message: Number,
  date: Number,
  complaint: {type: Schema.Types.ObjectId, ref: 'Complaint'}
});

module.exports = mongoose.model('ChatComplaint', ChatSchema);
