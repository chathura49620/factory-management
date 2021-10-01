const mongoose = require('mongoose');

var Paymentschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    bankname:{
        type:String,
        required:true
    },
    accountnumber:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
   

})

const employeePaymentDetails = mongoose.model('paymentDetails',Paymentschema);

module.exports = employeePaymentDetails;