const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },

    mobileNumber:{
        type:Number,
        required:true
    },

    feedback:{
        type:String,
        required:true
    },
    

    

   

})
const feedbackDetails = mongoose.model('feedbackDetails',schema);

module.exports = feedbackDetails;