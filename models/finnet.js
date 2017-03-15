var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Sub = require('../models/subs');
var Bill = require('../models/bill');

var FinnetSchema   = new Schema({
  typedata: String,
  subid: String,
  subname: String,
  trxid: String,
  trxdate: Date,
  signature: String,
  amount: Number,
  respcode: Number,
  invoiceid: Number,
  sub: {type: Schema.Types.ObjectId, ref: 'Sub'},
  bill: {type: Schema.Types.ObjectId, ref: 'Bill'}
});

module.exports = mongoose.model('Finnet', FinnetSchema);
