var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var moduleSchema   = new Schema({
  accsess: String,
  page: [String],
  menu: [String]
});

module.exports = mongoose.model('Module', ModuleSchema);
