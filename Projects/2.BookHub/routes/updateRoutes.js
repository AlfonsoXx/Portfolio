const express = require('express')
const router = express.Router()
const {displayUpdatePage} = require('../controllers/updateControllers')

router.get("/", displayUpdatePage)

module.exports = router