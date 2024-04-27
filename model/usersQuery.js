const mysql = require('mysql2');
const dbconfig = require('./db');
const connection = mysql.createConnection(dbconfig);

exports.createUser = (nickname, email) => {
    let query = 'insert into users(nickname, email) values(?, ?)'
    values = [
        nickname, email
    ]
    connection.query(query, values, (error, result) => {
        if(error) throw error
        console.log('result in query page =' + result)
        return result.affectedRows
    })
}