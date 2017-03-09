var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProblemSchema   = new Schema({
  category: String,
  subcategory: String,
  desc: String
});

module.exports = mongoose.model('Problem', ProblemSchema);
