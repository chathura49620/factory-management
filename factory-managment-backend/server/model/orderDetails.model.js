const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    orderId:{
        type:String,
        required:true
    },

    buyerName:{
        type:String,
        required:true
    },
<<<<<<< HEAD

    email:{
=======
    email:{ 
>>>>>>> IT19048338
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

    paymentMethode:{
        type:String,
        required:true
    },
    

    status:{
        type:String,
        required:true
    },


   

})
const orderDetails = mongoose.model('orderDetails',schema);

module.exports = orderDetails;