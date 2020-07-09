const Order = require('../models/orderModel');

exports.orderFindAll = async (req, res) => {
    try {
        const order = await Order.all()
        res.status(200).json({
            order,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}