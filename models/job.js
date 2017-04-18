var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var JobSchema   = new Schema({
  name: Number,
  status: String,
  emp1: String,
  emp2: String
});

module.exports = mongoose.model('Job', CitySchema);
