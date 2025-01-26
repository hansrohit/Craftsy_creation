const express = require("express")
const router = express.Router()
const Cart = require("../models/cartModel")

router.get("/view", async(req, res)=>{
    try {
        const userEmail = req.query.userEmail
        const cartItems= await Cart.find({userEmail:userEmail})
        if(cartItems)
        {
            res.json(cartItems)
        }
        else
        {
            res.json({
                message:"no cart items is there"
            })
        }
    } catch (error) {
        console.log(error)
    }
})

router.post("/add",async(req, res)=>{
    try {
        const {email, image, name,desc, price} = req.body
    if(email && image && name && desc && price)
    {
        const check = await Cart.findOne({userEmail:email,productName:name})
        if(check)
        {
            res.json({
                message:"product alreadt exist in the cart"
            })
        }
        else
        {
            await Cart.create({
                userEmail:email,
                productImage:image,
                productName:name,
                productDesc:desc,
                productPrice:price
            })
            res.json({
                message:"Added to cart successfully"
            })
        }
    }
    } 
    catch (error) {
        console.log(error)
    }
    
})

router.delete("/delete",async(req, res)=>{
    try {
        const {userEmail, productId} = req.body
        
        const check = await Cart.findOne({userEmail:userEmail, _id:productId})
        if(check)
        {
            await Cart.findByIdAndDelete(productId)
            res.json({
                message:"Deleted the cart item"
            })
        }
        else
        {
            res.json({
                message:"No cart item is matched"
            })
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router