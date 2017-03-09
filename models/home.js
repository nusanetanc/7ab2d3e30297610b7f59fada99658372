var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var City = require('../models/city');
var Property = require('../models/property');
var Type = require('../models/type');
var Cluster = require('../models/cluster');
var Blokfloor = require('../models/blokfloor');

var HomeSchema   = new Schema({
  groovyid: String,
  city: {type: Schema.Types.ObjectId, ref: 'City'},
  property: {type: Schema.Types.ObjectId, ref: 'Property'},
  typeproperty: {type: Schema.Types.ObjectId, ref: 'typeproperty'},
  cluster: {type: Schema.Types.ObjectId, ref: 'Cluster'},
  blokfloor: {type: Schema.Types.ObjectId, ref: 'Blokfloor'},
  nohome: Number,
  vendorfo: String,
  vendortv: String,
  perangkat: [String]
});

module.exports = mongoose.model('Home', HomeSchema);
