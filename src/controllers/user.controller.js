
const express=require("express")
const router=express.Router()
const User=require("../models/user.model")

router.post("",async(req,res)=>{
    try {
        let user=await User.create(req.body)
        return res.send(user)
    } 
    catch (error) {
        return res.send({Error:error})
    }
})
module.exports=router