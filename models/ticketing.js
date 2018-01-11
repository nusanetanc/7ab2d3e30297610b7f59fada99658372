var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Sub = require('../models/subs');

var TicketingSchema   = new Schema({
  subid: String,
  subname: String,
  sub: {type: Schema.Types.ObjectId, ref: 'Sub'},
});

module.exports = mongoose.model('Ticketing', TicketingSchema);
