const express = require('express')

const {
    userFindAll,
    userFindById,
    userDelete,
    userUpdate,
    userCreate,
    userCount,
    userFindByRole
} = require('../controllers/userController')

const router = express.Router()

router.get("/", userFindAll)

router.get("/:id", userFindById)

router.get("/role/:id", userFindByRole)

router.delete("/:id", userDelete)

router.post("/:id", userUpdate)

router.post("/", userCreate)

router.get("/count/:id", userCount)

module.exports = router