var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var TypeProperty = require('../models/type');

var ClusterSchema   = new Schema({
  name: String,
    typeproperty: {type: Schema.Types.ObjectId, ref: 'TypeProperty'}
});

module.exports = mongoose.model('Cluster', ClusterSchema);
