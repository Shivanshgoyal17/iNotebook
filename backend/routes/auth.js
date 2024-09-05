const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

// create a User using : POST "/api/auth". Doesn't require authentication

router.post('/', [
    body('name', 'Enter a valid name').isLength({min:3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({min: 5})
], async (req, res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    try {
        const user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
        res.json(user);
      } 
      catch (error) {
        if (error.code === 11000) {
          // Duplicate key error
          return res.status(400).json({ error: 'Email already exists' });
        }
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
    

    // res.send(req.body)

})

module.exports = router


// So hume jitne bhi authentication related endpoints likhne hai wo hum is file me likhege
// In line 10 we have created a user
// After creating a user we will add some validations otherwise if the user does not fill any of the fields like email so our app will get crash
