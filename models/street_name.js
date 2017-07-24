var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Cluster = require('../models/cluster');
//var BlokfloorSchema = require('../models/blokfloor');

var StreetnameSchema   = new Schema({
    name: String,
    blok: String,
    cluster: {type: Schema.Types.ObjectId, ref: 'Cluster'},
    //blokfloor: {type: Schema.Types.ObjectId, ref: 'BlokfloorSchema'}
});
module.exports = mongoose.model('Streetname', StreetnameSchema)
