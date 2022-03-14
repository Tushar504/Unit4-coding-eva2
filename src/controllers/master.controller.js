const express=require("express")
const router=express.Router()
const Master=require("../models/master.model")

router.post("",async(req,res)=>{
    try {
        let master=await Master.create(req.body)
        return res.send(master)
    } 
    catch (error) {
        return res.send({Error:error})
    }
})
module.exports=router