const express=require("express")
const app=express()

app.use(express.json())
const userController=require("./controllers/user.controller")
const branchController=require("./controllers/branch.controller")
const masterController=require("./controllers/master.controller")
const savingController=require("./controllers/saving.controller")
const fixedController=require("./controllers/fixed.controller")

app.use("/user",userController)
app.use("/branch",branchController)
app.use("/master",masterController)
app.use("/saving",savingController)
app.use("/fixed",fixedController)

module.exports=app