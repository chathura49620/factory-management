const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    userRole:{
        type:String,
        required:true
    },
    userRoleNo:{
        type:String,
        required:true
    },
    status:String,
})

const userRole = mongoose.model('userRole',schema);

module.exports = userRole;     