const express = require('express')

const  {handelshort} = require("../controller/userHandel")

const router = express.Router()
router.post("/",handelshort)

module.exports  = router