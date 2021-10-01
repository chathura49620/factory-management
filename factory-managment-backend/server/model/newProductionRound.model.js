const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    productId:{
        type:String,
        required:true
    },

    productCategory:{
        type:String,
        required:true
    },

    quantity:{
        type:Number,
        required:true
    },

    esDays:{
        type:Number,
        required:true
    },

    esEmployees:{
        type:Number,
        required:true
    },

    status:{
        type:String,
        required:true
    },


   

})
const newProductionRoundDetails = mongoose.model('newProductionRoundDetails',schema);

module.exports = newProductionRoundDetails;