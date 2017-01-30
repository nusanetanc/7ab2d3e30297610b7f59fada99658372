var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var HomeSchema   = new Schema({
  homeid: Number,
  propertiname: String,
  type: String,
  cluster: String,
  blokfloor: String,
  nohome: Number,
  city: String,
  fo: String,
  tv: String,
  perangkat: [String]
});

module.exports = mongoose.model('Home', HomeSchema);
