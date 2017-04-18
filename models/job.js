var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var JobSchema   = new Schema({
  name: String,
  status: String,
  emp1: String,
  emp2: String,
  subs: String
});

module.exports = mongoose.model('Job', JobSchema);
