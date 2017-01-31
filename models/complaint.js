var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ComplaintSchema   = new Schema({
  idcompalint: Number,
  subject: String,
  category: String,
  dateopen: Date,
  dateclose: Date,
  status: String,
  lastchat: [String]
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
