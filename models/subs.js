var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SubSchema   = new Schema({
    subid: String,
    groovyid: String,
    name: String,
    nohp: String,
    email: String,
    dateinst: Date,
    timeinst: Date,
    password: String,
    datebrith: String,
    packlev: String,
    cardid: String,
    nova: Number,
    status: String,
    regisby: String,
    regisref: String,
    billing: [{type: Schema.Types.ObjectId, ref: 'Billing'}],
    history: [{type: Schema.Types.ObjectId, ref: 'History'}]

});

module.exports = mongoose.model('Sub', SubSchema);
