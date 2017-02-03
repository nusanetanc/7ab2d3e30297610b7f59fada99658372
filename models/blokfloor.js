var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Cluster = require('../models/cluster');

var BlokfloorSchema   = new Schema({
  blokfloor: String,
    cluster: {type: Schema.Types.ObjectId, ref: 'Cluster'}
});
module.exports = mongoose.model('Blokfloor', BlokfloorSchema)
