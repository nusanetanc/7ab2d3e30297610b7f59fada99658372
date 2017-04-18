var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Sub = require('../models/subs');

var ComplaintSchema   = new Schema({
  subject: String,
  category: String,
  subcategory: String,
  dateopen: String,
  dateclose: String,
  status: String,
  lastchat: [String],
  sub: {type: Schema.Types.ObjectId, ref: 'Sub'}
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
