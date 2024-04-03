
const mongoose = require('mongoose')
const express = require("express")
const userRouter = require("./router/userRoute")
const userSchema = require("./models/userModels")


const app = express()


const url = "mongodb+srv://Parth:ekMFT3OeCLMBFFeN@cluster01.tuu5mok.mongodb.net/"



mongoose.set('strictQuery', false);

const connectionparams ={
    useNewUrlParser : true,
    useUnifiedTopology : true,

}
app.use(express. json());
mongoose.connect(url,connectionparams).then(()=>{
    console.log("connected")
}).catch((e)=>{
    console.log("Error",e)
})


app.use("/url", userRouter)

app.get("/:shortid",async(req,res)=>{
    const shortid = req?.params?.shortid
    console.log(shortid)
    
    const entry = await userSchema.findOneAndUpdate({shortId:shortid },
    {
        $push:{
            visithistory:{
                timestamp: Date.now()
            }
        }
    } );
    
  res.redirect(entry.redirectUrl)
});


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});





// app.post('/user',async(req,res)=>{
//     const {name,add,Roll} = req.body
//     await User.create({
//         name:name,
//         add:add,
//         Roll : Roll
//     })
//     return res.send("fghh")
// })