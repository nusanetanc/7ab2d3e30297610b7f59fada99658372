var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Emp = require('../models/employee');

var InformationSchema   = new Schema({
  to: String,
  date: Date,
  desc: String,
  status: String,
  subject: String,
  usercreate: {type: Schema.Types.ObjectId, ref: 'Emp'}

});

module.exports = mongoose.model('Information', InformationSchema);
