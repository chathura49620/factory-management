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
    completedQuantity:{
        type:Number,
        required:true
    },
    remainingQuantity:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },


   

})
const previousProductionRoundDetails = mongoose.model('previousProductionRoundDetails',schema);

module.exports = previousProductionRoundDetails;