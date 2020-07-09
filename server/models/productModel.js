const pool = require('./../db')

let product = {}

product.category = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM products where category_id = ?`, [id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

product.create = (product) => {

    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO products (name, price, image, description, category_id) values ( ?, ?, ?, ?, ?)`, [product.name, product.price, product.image, product.description, product.category_id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

product.one = (id) => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM products where id = ?`, [id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

product.update = (id, product) => {

    return new Promise((resolve, reject) => {
        pool.query(`UPDATE products set name = ?, price = ?, description = ? WHERE id = ?`, [product.name, product.price, product.description, id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })

}

product.delete = (id) => {

    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM products WHERE id = ?`, [id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })

}

product.all = () => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM products`, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

module.exports = product