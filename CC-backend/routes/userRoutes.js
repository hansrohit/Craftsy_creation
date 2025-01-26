const express = require("express")
const router=express.Router()


const jwt = require("jsonwebtoken")
const verifyToken = require("../middleware/auth");


const User=require("../models/userModel")

router.post("/register",async(req, res)=>{
    try {
        const {name, email, password} = req.body
        
        const check = await User.findOne({email:email})
        if(check)
        {
             res.json({
                message:"failed"
            })
        }
        else
        {
            const user = await User.create({
                name:name,
                email:email,
                password:password,
                admin:false
            })
             res.json({
                message:"successful"
            })
        }
       
    } catch (error) {
        console.log(error)
    }
})

router.post("/login", async(req, res)=>{
    try {
        const {email, password} = req.body
        const user= await User.findOne({email:email})
        if(user)
        {
            if(user.password === password)
            {
                const authToken = jwt.sign({userId: user._id},process.env.JWT_SECRET,{expiresIn:"1h"})
                res.json({
                    message:"successful",
                    name:user.name,
                    admin:user.admin,
                    token:authToken
                })
            }
            else
            {
                res.json({
                    message:"failed"
                })
            }
        }
        else
        {
            res.json({
                message:"no user exist"
            })
        }
    } catch (error) {
        console.log(error)
    }
})

router.get("/profile", verifyToken, async (req, res) => {
    try {
        
        const user = await User.findById(req.user.userId); 
        if (user) {
            res.json({
                message: "successful",
                name: user.name,
                email: user.email,
                admin: user.admin
            });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router

