const mongoose = require('mongoose');



require('dotenv').config();

const connectToDB= async()=>{
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
};

module.exports = connectToDB;
