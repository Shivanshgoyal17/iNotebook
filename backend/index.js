const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Mr. Stark!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// Here in this file we first imported the db
// Index.js is actually an express server so go to express js starter template website
// 