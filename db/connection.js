const mysql = require('mysql');
//require('dotenv').config();

const db = mysql.createConnection({
    host: '3000',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'windows',
    database: 'employee_tracker_db',
});

module.exports = db;