const {bookModel} = require('../models/bookModel')

exports.displayCreatePage = (req, res ) => res.render('createBooks.ejs')
exports.createBook =(req,res)=> {
  console.log(typeof(Number(req.body.isbn)))
  let book = new bookModel({
    title: req.body.title,
    author: req.body.author ? req.body.author : undefined,  // (?) <-- terenary operator is used to get code to show default schema 
    isbn: req.body.isbn ? Number(req.body.isbn) : undefined
  })
  book.save((err, data)=>{        //is comparing the data with the set schema 
    if(err) res.render('results.ejs', {message: err.message})
    else res.render('results.ejs', {message: data} )
  })
}

