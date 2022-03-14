const mongoose=require("mongoose")

const savingSchema=new mongoose.Schema({
   account_number:{type:Number,required:true},
   balance:{type:Number,required:true},
   intrestRate:{type:Number,required:true},
   userId:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"user",
       required:true
   },
   branchId:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"branch",
       required:true
   }

},{
    timestamps:true
})

const Saving=mongoose.model("savingAccount",savingSchema)

module.exports=Saving