const {bookModel} = require('../models/bookModel')

exports.getAllBooks = (req, res) => {
  bookModel.find({}, (err, bookArray) => {
    if (err) res.render("results.ejs", { message: err.message });
    else res.render("readBooks.ejs", { books: bookArray });
  });
};

