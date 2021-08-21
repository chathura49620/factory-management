const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    productCode:{
        type:String,
        required:true
    },
    productCategory:{
        type:String,
        required:true
    },
    status:String,
})

const productcode = mongoose.model('productcode',schema);

module.exports = productcode;