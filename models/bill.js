var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Sub = require('../models/subs');
var randomInt = require('random-int');

var BillSchema   = new Schema({
  noinvoice: randomInt(100000, 999999),
  pricepack: Number,
  priceinstal: Number,
  pricerouter: Number,
  pricestb: Number,
  promoname : String,
  pricepromo: Number,
  changetax: Number,
  total: Number,
  billdate: Date,
  duedate: Date,
  paydate: Date,
  status: String,
  sub: {type: Schema.Types.ObjectId, ref: 'Sub'}

});

module.exports = mongoose.model('Bill', BillSchema);
