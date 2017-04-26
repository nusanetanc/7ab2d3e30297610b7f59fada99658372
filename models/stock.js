var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Sub = require('../models/subs');
var Goods = require('../models/goods');

var StockSchema   = new Schema({
  goods: {type: Schema.Types.ObjectId, ref: 'Goods'},
  barcode: String,
  status: String,
  subs: {type: Schema.Types.ObjectId, ref: 'Sub'}
});

module.exports = mongoose.model('Stock', StockSchema);
