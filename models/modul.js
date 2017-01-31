var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ModulSchema   = new Schema({
  accsess: String,
  page: [String],
  menu: [String]
});

module.exports = mongoose.model('Modul', ModulSchema);
