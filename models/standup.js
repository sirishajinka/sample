const mongoose = require('mongoose');

const standupSchema = new mongoose.Schema({
    prodName : {type : String},
    prodPrice : {type: String},
    manuDate : {type: Number},
    expDate : {type: Number},
    barcode : {type : Number}
})

module.exports = mongoose.model('schema', standupSchema);
