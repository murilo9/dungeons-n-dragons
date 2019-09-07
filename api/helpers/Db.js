const mysql = require('mysql')

exports.con = (user) => {
    return mysql.createPool({
        connectionLimit: 99,
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'dbDungeons'
    })
}