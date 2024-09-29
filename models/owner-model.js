const mongoose = require("mongoose");



const ownerSchema = new mongoose.Schema({
    fullname :{
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 50,

    },
    email : String,
    password :String,
   
    isadmin :Boolean,
    product:{
        type: Array,
        default: []
    },
    pictute:Number,
    gstin: String,
      
});


const User = mongoose.model("owner", ownerSchema);

module.exports = User;