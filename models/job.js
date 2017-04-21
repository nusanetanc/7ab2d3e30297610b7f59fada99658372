var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Emp = require('../models/employee');
var Sub = require('../models/subs');

var JobSchema   = new Schema({
  name: String,
  status: String,
  detail: String,
  date: Date,
  emp1: {type: Schema.Types.ObjectId, ref: 'Emp'},
  emp2: {type: Schema.Types.ObjectId, ref: 'Emp'},
  subs: {type: Schema.Types.ObjectId, ref: 'Sub'}
});

module.exports = mongoose.model('Job', JobSchema);
