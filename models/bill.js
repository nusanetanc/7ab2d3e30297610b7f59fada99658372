var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var  = require('../models/subs');

var SubSchema   = new Schema({
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
  paydate: Date
  Status: String
  sub: {type: Schema.Types.ObjectId, ref: 'Sub'}

});

module.exports = mongoose.model('Sub', SubSchema);
