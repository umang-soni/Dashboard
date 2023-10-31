const express=require("express");
const cors=require("cors")
require("./db/config")
const User=require("./db/User")
const app=express();
app.use(express.json());
app.use(cors())
app.post("/register",async(req,res)=>{
let data=new User(req.body)
await data.save();
res.send(data)
})
app.listen(5000);