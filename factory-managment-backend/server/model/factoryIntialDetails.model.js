const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
    companyAddress:{
        type:String,
        required:true
    },
    ownerName:{
        type:String,
        required:true
    },
    companyLogo:{
        type:String,
        required:true
    },
    mainProduct:{
        type:String,
        required:true
    },
    br:{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    is_added:{
        type:String,
        required:true
    },
})

const factoryDetails = mongoose.model('factoryDetails',schema);

module.exports = factoryDetails;