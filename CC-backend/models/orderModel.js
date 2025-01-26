const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    userEmail:{
        type:String,
    },
    userAddress:{
        type:String,  
    },
    userPhno:{
        type:String,
    },
    productName:{
        type:String,
    },
    productImage:{
        type:String
    },
    productQuantity:{
        type:String
    },
    productPrice:{
        type:String
    }

},{timestamps:true})

const orderModel = mongoose.model("orders",orderSchema)
module.exports = orderModel