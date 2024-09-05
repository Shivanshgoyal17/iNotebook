const express = require('express')
const router = express.Router()
const User = require('../models/User')

// create a User using : POST "/api/auth". Doesn't require authentication

router.post('/', (req, res)=>{
    console.log(req.body)
    // res.send("Hello")
    const user = User(req.body)
    user.save()
    res.send(req.body)

})

module.exports = router


// So hume jitne bhi authentication related endpoints likhne hai wo hum is file me likhege
// In line 10 we have created a user
// After creating a user we will add some validations otherwise if the user does not fill any of the fields like email so our app will get crash
