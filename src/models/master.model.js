const mongoose=require("mongoose")

const masterSchema=new mongoose.Schema({
  balance:{type:Number,required:true},
  userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"user",
      required:true
  },
  employeeId:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:"user"
  },
  branchId:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:"branch"
  }

},{
    timestamps:true
})

const Master=mongoose.model("masterAccount",masterSchema)

module.exports=Master