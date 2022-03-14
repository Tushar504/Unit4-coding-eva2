const express=require("express")
const router=express.Router()
const Fixed=require("../models/fixed.model")

router.post("",async(req,res)=>{
    try {
        let fixed=await Fixed.create(req.body)
        return res.send(fixed)
    } 
    catch (error) {
        return res.send({Error:error})
    }
})
module.exports=router