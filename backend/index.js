const express = require('express');
const dotenv=require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const MONGO_URI=process.env.MONGO_URI;
const PORT=process.env.PORT || 8080;

const app = express();
app.get("/",(req,res)=>{
    res.send("connected to e-commerce backend successfully");
})

mongoose.connect(MONGO_URI)
.then((check)=>{
    app.listen(PORT,()=>{
        console.log("connected to server");
    })
}).catch((err)=>{
        console.log(err);
    
})