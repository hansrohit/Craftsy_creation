const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productImage:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true,
    },
    productDesc:{
        type:String,
        required:true
    },
    productPrice:{
        type:String,
        required:true
    }
    
})

const productModel = mongoose.model("products", productSchema)
module.exports = productModel