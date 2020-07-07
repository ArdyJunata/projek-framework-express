const pool = require('./../db')

let user = {}

user.all = () => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM user`, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

user.one = (id) => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM user where id = ?`, [id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

user.email = (email, password) => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM user where email = ? && password = ?`, [email, password], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })

}

user.role = (id) => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM user where role_id = ?`, [id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })

}

user.delete = (id) => {

    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM user WHERE id = ?`, [id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })

}

user.update = (id, user) => {

    return new Promise((resolve, reject) => {
        pool.query(`UPDATE user set name = ?, email = ?, address = ?, city = ?, province = ?, role_id = ?  WHERE id = ?`, [user.name, user.email, user.address, user.city, user.province, user.role_id, id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })

}

user.create = (user) => {

    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO user (name, email, password, address, city, province, image, role_id) values ( ?, ?, ?, ?, ?, ?, ?, ?)`, [user.name, user.email, user.password, user.address, user.city, user.province, user.image, user.role_id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })

}

user.count = (id) => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT COUNT(*) as count from user WHERE role_id = ? `, [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })

}

module.exports = user;