const express = require('express')
const router = express.Router()
//calling function from ejs file
const {displayDeletePage} = require('../controllers/deleteControllors')
// invoking function
router.get('/', displayDeletePage)


module.exports = router 