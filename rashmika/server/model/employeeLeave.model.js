const mongoose = require('mongoose');

var Empschema = new mongoose.Schema({
    refno:{
        type:String,
        required:true
    },
    reasonforleave:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
   

})

const employeeLeaveDetails = mongoose.model('leaveDetails',Empschema);

module.exports = employeeLeaveDetails;