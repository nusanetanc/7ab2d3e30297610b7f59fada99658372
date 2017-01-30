var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SubSchema   = new Schema({
    idemployee: Number,
    name: String,
    departement: String,
    titlejob: String,
    accessrole: String,
    photo: String
});

module.exports = mongoose.model('Sub', SubSchema);
