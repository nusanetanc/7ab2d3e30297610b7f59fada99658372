var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SubSchema   = new Schema({
    subid: String,
    groovyid: String,
    name: String,
    phone: String,
    email: String,
    dateinst: Date,
    timeinst: String,
    password: String,
    datebrith: String,
    packlev: String,
    cardid: String,
    nova: Number,
    status: String,
    regisby: String,
    regisref: String,
    idnumber: Number,
    billing: [{type: Schema.Types.ObjectId, ref: 'Billing'}],
    history: [{type: Schema.Types.ObjectId, ref: 'History'}]

});

module.exports = mongoose.model('Sub', SubSchema);
