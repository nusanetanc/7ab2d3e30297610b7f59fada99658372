var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SubSchema   = new Schema({
    subid: String,
    name: String,
    email: String,
    password: String,
    nohp: String,
    datebrith: String,
    homeid: String,
    homedesc: String,
    jobs: String,
    packlev: String,
    cardid: String,
    nova: Number,
    billing: [{type: Schema.Types.ObjectId, ref: 'Billing'}]

});

module.exports = mongoose.model('Sub', SubSchema);
