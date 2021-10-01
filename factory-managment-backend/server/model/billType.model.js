const mongoose = require("mongoose");

var schema = new mongoose.Schema({
    billType:{
        type:String,
        required:true
    },
    status:String,
})


const billType = mongoose.model("billType", schema);

module.exports = billType;