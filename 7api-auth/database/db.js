require('dotenv').config();
const mongoose= require('mongoose');

const connecttoDB =  async ()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb is connected successfully");
        // console.log("mongodb is connected successfully");
        // console.log("mongodb is connected successfully");
    }
    catch(e){
        console.error("MongoDB connection error:", e);
        process.exit(1);
    }
};

module.exports = connecttoDB;