var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Ticket = require('../models/complaint');

var SubSchema   = new Schema({
  Message: Number,
  date: Number,
  ticket: {type: Schema.Types.ObjectId, ref: 'Ticket'}
});

module.exports = mongoose.model('Ticket', SubSchema);
