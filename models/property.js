var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var City = require('../models/city');

var PropertySchema   = new Schema({
  city: {type: Schema.Types.ObjectId, ref: 'City'}
  property: String,
});

module.exports = mongoose.model('Property', PropertySchema);
