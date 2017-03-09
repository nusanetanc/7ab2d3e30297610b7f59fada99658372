var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PackageSchema   = new Schema({
  level: Number,
  price: Number,
  detail: String,
  information : [String]
});

module.exports = mongoose.model('Package', PackageSchema);
