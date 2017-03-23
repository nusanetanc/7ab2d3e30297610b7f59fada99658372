var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CitySchema   = new Schema({
  cityid: Number,
  name: String
});

module.exports = mongoose.model('City', CitySchema);
