const express=require("express")
const router=express.Router()
const Branch=require("../models/Branch.model")

router.post("", async(req,res)=>{
    try {
        let branch=await Branch.create(req.body)
        return res.send(branch)
    } 
    catch (error) {
        return res.send({Error:error})
    }
})
module.exports=router