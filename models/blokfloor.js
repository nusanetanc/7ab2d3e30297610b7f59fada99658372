var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Cluster = require('../models/cluster');

var BlokfloorSchema   = new Schema({
  cluster: {type: Schema.Types.ObjectId, ref: 'Cluster'}
  blokfloor: String
});
module.exports = mongoose.model('Blokfloor', BlokfloorSchema);
