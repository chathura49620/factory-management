const mongoose = require('mongoose');

var schema = new mongoose.Schema({
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

const employeeLeaveDetails = mongoose.model('leaveDetails',schema);

module.exports = employeeLeaveDetails;