const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

app.use(express.json())
app.use(cors())

const db = require("./config")
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")
const cartRoutes = require("./routes/cartRoutes")
const orderRoutes = require("./routes/orderRoutes")

app.use("/user",userRoutes)
app.use("/product",productRoutes)
app.use("/cart", cartRoutes)
app.use("/order", orderRoutes)


app.use("/test",(req, res)=>{
    return res.json({
        message:"testing"
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on the port: ${process.env.PORT} `)
})