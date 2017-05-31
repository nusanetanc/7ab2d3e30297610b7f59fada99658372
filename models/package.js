 var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PackageSchema   = new Schema({
  level: Number,
  price: Number,
  detail: String,
  cluster: String,
  type: String,
});

module.exports = mongoose.model('Package', PackageSchema);
