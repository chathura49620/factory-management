const mongoose = require("mongoose");

var schema = new mongoose.Schema({
    empID:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    month:{
        type:String,
        required:true
    }
})

  
const temSalaries = mongoose.model("temSalaries", schema);

module.exports = temSalaries;
      