const express = require("express")
const router = express.Router();
const Order = require("../models/orderModel");
const orderModel = require("../models/orderModel");

router.post("/add",async(req, res)=>{
    try {
        const {email,address, phno, pName, pImage, pQuantity, pPrice}=req.body;
    if(address && pName)
    {
        const addOrder = await Order.create({
            userEmail:email,
            userAddress:address,
            userPhno:phno,
            productName:pName,
            productImage:pImage,
            productQuantity:pQuantity,
            productPrice:pPrice
        })
        res.json({
            message:"Placed order successfully"
        })
    }
    else
    {
        res.json({
            message:"No data is present"
        })
    }
    } catch (error) {
        console.log(error)
    }
    
})

router.get("/view",async(req, res)=>{
    try {
        const userEmail = req.query.userEmail
        
        const orderedData = await orderModel.find({userEmail:userEmail})
        if(orderedData)
        {
            res.json(orderedData)
        }
        else
        {
            res.json({
                message:"No order is placed"
            })
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router