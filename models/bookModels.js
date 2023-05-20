const mongoose = require('mongoose');

const Schema= mongoose.Schema

const books= new Schema({
    bookName:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    ISBN: {
        type: String,
        required: true
      },
      publishYear: {
        type: Number,
        required: true
      }
})

const book= mongoose.model('books',books)
module.exports=book