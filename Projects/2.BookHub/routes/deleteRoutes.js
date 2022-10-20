const express = require('express')
const router = express.Router()
//calling function from ejs file
const {displayDeletePage, deleteBook} = require('../controllers/deleteControllors')
// invoking function
router.get('/', displayDeletePage)
// router.post('/delete', deleteBook)



module.exports = router 

