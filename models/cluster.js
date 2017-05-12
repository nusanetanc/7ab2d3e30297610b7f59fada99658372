var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Property = require('../models/property');

var ClusterSchema   = new Schema({
  name: String,
  level: String,
  level: String,
  building: String,
  property: {type: Schema.Types.ObjectId, ref: 'Property'}
});

module.exports = mongoose.model('Cluster', ClusterSchema);
