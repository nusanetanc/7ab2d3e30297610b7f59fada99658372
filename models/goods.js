var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GoodsSchema   = new Schema({
  name: String,
  stock: Number
});

module.exports = mongoose.model('Goods', GoodsSchema);
