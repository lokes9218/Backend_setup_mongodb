// const { kMaxLength } = require('buffer');
const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true , 'book title is required' ],
        trim:  true,
        maxLength:[100, 'book title is not more than 100 words']
    },
    author:{
        type:String,
        required:[true , 'author name is required' ],
        trim: true
    },
    year:{
        type:Number,
        required:[true,'number is required'],
        min:[1000,'1000 year is minimum to publish the book'],
        max:[new Date().getFullYear(),'future is not able to publish the book']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }   

})

module.exports = mongoose.model('Book', bookSchema);