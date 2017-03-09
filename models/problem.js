var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProblemSchema   = new Schema({
  Category: String
});

module.exports = mongoose.model('Problem', ProblemSchema);
