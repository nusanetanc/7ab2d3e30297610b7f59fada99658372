var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Property = require('../models/property');

var TypePropertySchema   = new Schema({
  city: {type: Schema.Types.ObjectId, ref: 'City'}
  typeproperty: String,
});

module.exports = mongoose.model('TypeProperty', TypePropertySchema);
