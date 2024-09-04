const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017"

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo Successfully")
    })
}

module.exports = connectToMongo;



// this file is created to connect to databse (our basic mongo db)
