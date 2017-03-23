var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var City = require('../models/city');

var PropertySchema   = new Schema({
  propertyid : Number,
  name : String,
  cityid : Number,
  city: {type: Schema.Types.ObjectId, ref: 'City'}
});

module.exports = mongoose.model('Property', PropertySchema);
