const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Product = require("../models/productModel")

router.get("/view",async(req, res)=>{
    try {
        const products = await Product.find()
        if(products)
        {
            res.json(products)
        }
        else
        {
            res.json({
                message:"No products there"
            })
        }
    } catch (error) {
        console.log(error)
    }
})

router.post("/add",async(req, res)=>{
    try {
        const {image, name, desc, price} = req.body
        if(image && name && desc && price)
        {
            const check = await Product.findOne({productName:name})
            if(check)
            {
                res.json({
                    message:"Product already Exist"
                })
            }
            else
            {
                await Product.create({
                    productImage:image,
                    productName:name,
                    productDesc:desc,
                    productPrice:price
                })
                res.json({
                    message:"Added Products Successfully"
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
})

router.delete("/delete",async(req, res)=>{
    try {
        const {id} = req.body
    const check = await Product.findOne({_id:id})
    if(check)
    {
        await Product.findByIdAndDelete(id)
        res.json({
            message:"Product have been deleted"
        })
    }
    else
    {
        res.json({
            message:"Product doesn't exist"
        })
    }
    } catch (error) {
        console.log(error)
    }
    
})

module.exports = router