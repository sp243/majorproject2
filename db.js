const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://sneh:09k07W2JR7aLHP9q@cluster0.ysqznut.mongodb.net/sheycars' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=> {
        console.log('Mongo DB Connection Sucessfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })
}

connectDB()

module.exports = mongoose