var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Emp = require('../models/employee');

var InformationSchema   = new Schema({
  for: String,
  date: Date,
  subject: String,
  desc: String,
  status: String,
  usercreate: {type: Schema.Types.ObjectId, ref: 'Emp'}

});

module.exports = mongoose.model('Emp', EmployeeSchema);
