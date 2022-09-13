const mongoose = require('mongoose')

  //Blueprints
  //Schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Must have title"]
  },
  author: { 
    type: String,
    default: "Anonymous"
  },
  isbn: {
  type: Number,
  minLength: [10, "ISBN must be at least 10 digits"],      // ["", "Error"]
  maxLength: [13, "ISBN must be less than 13 digits"],
  required: [true, "Must have an ISBN"]
  }
});

  //Model
exports.bookModel = new mongoose.model('books', bookSchema) 

