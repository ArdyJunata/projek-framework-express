const Product = require('../models/productModel');

exports.productFindByCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.category(id);
        res.status(200).json({
            data,
        })
    } catch {
        res.status(500).json({
            error: err
        })
    }
}

exports.productCreate = async (req, res) => {
    try {
        const body = req.body
        const file = req.files.image
        const filename = file.name
        const nama = Math.random().toString() + filename
        if (req.files) {
            file.mv('C:/xampp/htdocs/karcisku/assets/img/product/category/' + nama)
        }
        const data = {
            name: body.name,
            price: body.price,
            image: nama,
            description: body.description,
            category_id: body.category_id
        }

        await Product.create(data)
        res.status(200).json({
            message: 'add product success'
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.productById = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.one(id)
        res.status(200).json({
            product,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.productUpdate = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body

        await Product.update(id, body)
        res.status(200).json({
            message: 'update success'
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.productDelete = async (req, res) => {
    try {
        const id = req.params.id
        await Product.delete(id)
        res.status(200).json({
            message: 'delete success'
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.productFindAll = async (req, res) => {
    try {
        const product = await Product.all()
        res.status(200).json({
            product,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.productCount = async (req, res) => {
    try {
        const data = await Product.count();
        res.status(200).json({
            data
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}