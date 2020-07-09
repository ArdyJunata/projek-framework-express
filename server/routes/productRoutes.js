const express = require('express');

const {
    productFindByCategory,
    productCreate,
    productById,
    productUpdate,
    productDelete,
    productFindAll
} = require('../controllers/productController')

const router = express.Router();

router.get("/category/:id", productFindByCategory)

router.get("/:id", productById)

router.delete("/:id", productDelete)

router.get("/", productFindAll)

router.post("/", productCreate)

router.post("/:id", productUpdate)

module.exports = router