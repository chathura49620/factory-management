const mongoose = require('mongoose');

var EmpAsschema = new mongoose.Schema({
    documentid:{
        type:String,
        required:true
    },
    supervisor:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
   
    status:{
        type:String,
        required:true
    },

})

const employeeAssignmentDetails = mongoose.model('assignmentDetails',EmpAsschema);

module.exports = employeeAssignmentDetails;