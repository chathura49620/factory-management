const mongoose = require("mongoose");

var schema = new mongoose.Schema({
    matirialCode:{
        type:String,
        required:true
    },
    matirialBillNo:{
        type:String,
        required:true
    },   
    date:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
})


const matirialCost = mongoose.model("matirialCost", schema);

module.exports = matirialCost;