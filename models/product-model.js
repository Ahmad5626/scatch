const mongoose = require("mongoose");



const productSchema = new mongoose.Schema({
    
    image: String,
    name: String,
    price:Number,
    discount:{
        type: Number,
        default: 0
    },
    bgcolor:String, 
    panelcolor:String,
    texrcolor:String
      
});


const User = mongoose.model("product", productSchema);

module.exports = User;