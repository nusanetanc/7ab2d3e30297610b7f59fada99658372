var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CitySchema   = new Schema({
  city: String
});

module.exports = mongoose.model('City', CitySchema);
