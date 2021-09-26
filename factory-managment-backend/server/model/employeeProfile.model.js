const mongoose = require('mongoose');

var Profileschema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    dateofbirth:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
   

})

const employeeProfileDetails = mongoose.model('profileDetails',Profileschema);

module.exports = employeeProfileDetails;