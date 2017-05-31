var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var EmpSchema   = new Schema({
    idemployee: Number,
    name: String,
    email: String,
    handphone: Number,
    city: String,
    password: String,
    departement: String,
    titlejob: String,
    accessrole: String,
    status: String,
    photo: String
});

module.exports = mongoose.model('Emp', EmpSchema);
