const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

const app = express()
const port = 3000

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// Here in this file we first imported the db
// Index.js is actually an express server so go to express js starter template website
// What are the things that we need in our project - first is mongoose modals, then routes

// Mongodb structure - databse -> collection -> documents (ANd documents is json only)
// The main role of mongoose in this project is its saying tum application chalao and database ko manage karne ka kaam mujhpe chordo, so we will make mongoose models.

// Notes and User Schema ka use karke humne model banaye hain, schema is basically format jiske adhar par application kaam karegi
