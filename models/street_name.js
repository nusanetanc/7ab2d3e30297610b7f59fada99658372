var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var BlokfloorSchema = require('../models/blokfloor');

var StreetnameSchema   = new Schema({
    name: String,
    blok: {type: Schema.Types.ObjectId, ref: 'BlokfloorSchema'}
});
module.exports = mongoose.model('Streetname', StreetnameSchema)
