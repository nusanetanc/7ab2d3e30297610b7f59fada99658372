var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Sub = require('../models/subs');
var Bill = require('../models/bill');

var FinnetSchema   = new Schema({
  typedate: String,
  subid: Number,
  subname: String,
  trxid: String,
  trxdate: Number,
  signature: Number,
  amount: Number,
  respcode: Number,
  invoiceid: Number,
  sub: {type: Schema.Types.ObjectId, ref: 'Sub'},
  bill: {type: Schema.Types.ObjectId, ref: 'Bill'}
});

module.exports = mongoose.model('Finnet', FinnetSchema);
