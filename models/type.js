var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Property = require('../models/property');

var TypePropertySchema   = new Schema({
  name: String,
  property: {type: Schema.Types.ObjectId, ref: 'Property'}
});

module.exports = mongoose.model('TypeProperty', TypePropertySchema);
