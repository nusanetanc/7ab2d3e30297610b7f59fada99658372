var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var City = require('../models/city');

var PropertySchema   = new Schema({
  name : String,
  city: {type: Schema.Types.ObjectId, ref: 'City'}
});

module.exports = mongoose.model('Property', PropertySchema);
