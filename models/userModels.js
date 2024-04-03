const { type } = require("express/lib/response")
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
     shortId: {
        type : String,
        required : true,
        unique : true
    },
     redirectUrl:{
        type : String,
        required : true
    },
    visithistory : [{
        timestamp:{
            type:Number
        }
    }]
},{timestamps:true})

const userModel = mongoose.model("userAuthentication",userSchema)

module.exports = userModel