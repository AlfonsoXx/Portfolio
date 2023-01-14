const {bookModel} = require('../models/bookModel')

exports.displayDeletePage = (req,res) => {
    bookModel.find({}, (err, bookArray) => {
        if (err) res.render("results.ejs", { message: err.message });
            else res.render("deletebooks.ejs", { books: bookArray });
    });
};


