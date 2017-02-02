var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var TypeProperty = require('../models/type');

var ClusterSchema   = new Schema({
  typeproperty: {type: Schema.Types.ObjectId, ref: 'TypeProperty'}
  addres: String,
  cluster: String,
});

module.exports = mongoose.model('Cluster', ClusterSchema);
