const mongoose = require('mongoose');

const mongoURI =  "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Conected to Mongo Succesfully");
    })
}

module.exports = connectToMongo;