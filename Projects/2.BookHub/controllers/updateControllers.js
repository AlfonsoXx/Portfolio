const {bookModel} = require('../models/bookModel')


// exports.displayUpdatePage = (req,res) => res.render("updateBooks.ejs")
exports.displayUpdatePage = (req, res) => {
    bookModel.find({}, (err, bookArray) => {
        if (err) res.render("results.ejs", { message: err.message });
        else res.render("updateBooks.ejs", { books: bookArray });
    });
};