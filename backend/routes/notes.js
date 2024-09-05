const express = require('express')
const router = express.Router()


router.get('/', (req, res)=>{
    res.json([])
})

module.exports = router


// So hume jitne bhi notes related endpoints likhne hai wo hum is file me likhege