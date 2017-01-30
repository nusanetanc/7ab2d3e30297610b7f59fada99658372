var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ComplaintSchema   = new Schema({
  level: Number,
  harga: Number,
  detail: String,
  information : [String]
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
