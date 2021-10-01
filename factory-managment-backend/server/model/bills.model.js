const mongoose = require("mongoose");

var schema = new mongoose.Schema({
    billNo:{
        type:String,
        required:true
    },
    billType:{
        type:String,
        required:true
    },   
    amount:{
        type:String,
        required:true
    },
    billDate:{ 
        type:Date,
        required:true   
    },
    month:{  
        type:String,
        required:true
    },
    status:String,
})


const bills = mongoose.model("bills", schema);

module.exports = bills;