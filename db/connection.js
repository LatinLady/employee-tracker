const mysql = require('mysql2');
const cfonts = require('cfonts');
//require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'windows',
    database: 'employee_tracker_db'
});

module.exports = db;