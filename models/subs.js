var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SubSchema   = new Schema({
    subid: String,
    name: String,
    email: String,
    nohp: String,
    datebrith: String,
    homeid: String,
    homedesc: String,
    jobs: String,
    packlev: String,
    cardid: String,
    nova: Number

});

module.exports = mongoose.model('Sub', SubSchema);
