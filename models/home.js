var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var City = require('../models/city');
var Property = require('../models/property');
var Cluster = require('../models/cluster');

var HomeSchema   = new Schema({
  groovyid: Number,
  city: {type: Schema.Types.ObjectId, ref: 'City'},
  propertiname: {type: Schema.Types.ObjectId, ref: 'propertiname'},
  type: {type: Schema.Types.ObjectId, ref: 'type'},
  cluster: {type: Schema.Types.ObjectId, ref: 'cluster'},
  blokfloor: {type: Schema.Types.ObjectId, ref: 'blokfloor'},
  nohome: Number,
  fo: String,
  tv: String,
  perangkat: [String]
});

module.exports = mongoose.model('Home', HomeSchema);
