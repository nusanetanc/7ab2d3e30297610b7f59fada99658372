var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Emp = require('../models/employee');

var BillSchema   = new Schema({
  ipaddres: String,
  page: String,
  action: String,
  detail: String,
  date: Date,
  employee: {type: Schema.Types.ObjectId, ref: 'Sub'}

});

module.exports = mongoose.model('Emp', EmpSchema);
