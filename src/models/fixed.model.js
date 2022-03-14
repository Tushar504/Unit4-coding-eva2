const mongoose=require("mongoose")

const fixedSchema=new mongoose.Schema({
   account_number:{type:Number,required:true},
   balance:{type:Number,required:true},
   intrestRate:{type:Number,required:true},
   startDate:{type:String,required:true},
   maturityDate:{type:String,required:true},
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
    timestamps:true,
    versionKey:false,
})

const Fixed=mongoose.model("fixedAccount",fixedSchema)

module.exports=Fixed