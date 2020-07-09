const express = require('express')

const {
    orderFindAll
} = require('../controllers/orderController')

const router = express.Router()

router.get("/", orderFindAll)

module.exports = router