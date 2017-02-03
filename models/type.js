var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Property = require('../models/property');

var TypePropertySchema   = new Schema({
  typeproperty: String,
  city: {type: Schema.Types.ObjectId, ref: 'City'}
});

module.exports = mongoose.model('TypeProperty', TypePropertySchema);
