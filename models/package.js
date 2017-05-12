 var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PackageSchema   = new Schema({
  level: Number,
  price: Number,
  detail: String,
  clusterlevel: String,
});

module.exports = mongoose.model('Package', PackageSchema);
