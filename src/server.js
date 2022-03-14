
const app=require("./index")
const connect=require("./configs/db")
app.listen(1500,async()=>{
    try {
        await connect()
        console.log("Listening on 1500")
    } catch (error) {
        console.log(error)
    }
})