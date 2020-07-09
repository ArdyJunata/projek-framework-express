const pool = require('./../db')

let order = {}

order.all = () => {

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM `order` o, user u where o.user_id = u.id', (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

module.exports = order