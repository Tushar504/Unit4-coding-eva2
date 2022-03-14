const express=require("express")
const router=express.Router()
const Saving=require("../models/saving.model")

router.post("",async(req,res)=>{
    try {
        let saving=await Saving.create(req.body)
        return res.send(saving)
    } 
    catch (error) {
        return res.send({Error:error})
    }
})
module.exports=router