var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Emp = require('../models/employee');

var MenuSchema   = new Schema({
  title: String,
  file: String,
  icons: String,
  access: String,
  emp_id: {type: Schema.Types.ObjectId, ref: 'Emp'}
});

module.exports = mongoose.model('Menu', MenuSchema);
