const User = require('../models/userModel'),
    bcrypt = require('bcrypt');

exports.userFindAll = async (req, res) => {
    try {
        const user = await User.all()
        res.status(200).json({
            user,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.userFindById = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.one(id)
        res.status(200).json({
            user,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.userFindByRole = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.role(id)
        res.status(200).json({
            user,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.userFindByEmail = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.role(id)
        res.status(200).json({
            user,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.userDelete = async (req, res) => {
    try {
        const id = req.params.id
        await User.delete(id)
        res.status(200).json({
            message: 'delete success'
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.userUpdate = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body

        await User.update(id, body)
        res.status(200).json({
            message: 'update success'
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.userCreate = async (req, res) => {
    try {
        const file = req.files.image
        const filename = file.name
        const nama = Math.random().toString() + filename
        if (req.files) {
            file.mv('C:/xampp/htdocs/karcisku/assets/img/user/' + nama)
        }
        const body = req.body
        const hash = await bcrypt.hash(body.password, 10)
        const data = {
            name: body.name,
            email: body.email,
            password: hash,
            address: body.address,
            city: body.city,
            province: body.province,
            role_id: body.role_id,
            image: nama
        }

        await User.create(data)
        res.status(200).json({
            message: 'adduser success'
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.userCount = async (req, res) => {
    try {
        const id = req.params.id

        const data = await User.count(id)
        res.status(200).json({
            data
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}