console.log('mysql')

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    post: 3306,
    user: 'root',
    password: 'dltkdxo',
    database: 'board'
});

module.exports = connection;