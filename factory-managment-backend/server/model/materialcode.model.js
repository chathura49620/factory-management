const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    materialName:{
        type:String,
        required:true
    },
    materialCode:{
        type:String,
        required:true
    },
    status:String,
})

const materialcode = mongoose.model('materialcode',schema);

module.exports = materialcode;      