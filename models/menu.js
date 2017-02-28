var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MenuSchema   = new Schema({
  title: String,
  file: String,
  icons: String,
  access: String, 
});

module.exports = mongoose.model('Menu', MenuSchema);
