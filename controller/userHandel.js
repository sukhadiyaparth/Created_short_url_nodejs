const shortid = require("shortid")
const userSchema = require("../models/userModels")

async function handelshort (req,res){
    const body = req.body
    const id = shortid()
    await userSchema.create({
        shortId :id,
        redirectUrl : body.url,
        visithistory : []
    })

    return res.json({msg : id})

}

module.exports = {handelshort}