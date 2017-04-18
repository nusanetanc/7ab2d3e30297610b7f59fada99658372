var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var EmpSchema   = new Schema({
    idemployee: Number,
    name: String,
    email: String,
    handphone: Number,
    password: String,
    departement: String,
    titlejob: String,
    accessrole: String,
    photo: String
});

module.exports = mongoose.model('Emp', EmpSchema);
