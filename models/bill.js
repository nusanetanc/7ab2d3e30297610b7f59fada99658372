var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Sub = require('../models/subs');

var BillSchema   = new Schema({
  noinvoice: Number,
  namepack: String,
  pricepack: Number,
  priceinstal: Number,
  pricerouter: Number,
  pricestb: Number,
  promoname : String,
  pricepromo: Number,
  pricerj45cable: Number,
  changetax: Number,
  totalprice: Number,
  totalpay: Number,
  billdate: Date,
  duedate: Date,
  paydate: Date,
  status: String,
  sub: {type: Schema.Types.ObjectId, ref: 'Sub'}

});

module.exports = mongoose.model('Bill', BillSchema);
