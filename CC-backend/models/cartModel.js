const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    userEmail:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    productDesc:{
        type:String,
        required:true
    },
    productPrice:{
        type:String,
        required:true,
    }
})

const cartModel = mongoose.model("cart",cartSchema)
module.exports = cartModel