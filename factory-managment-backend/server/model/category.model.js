const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    status:String,
})

const category = mongoose.model('category',schema);

module.exports = category;