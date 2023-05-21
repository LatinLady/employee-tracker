const mysql = require('mysql');
const cfonts = requirer('cfonts');
require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: 'windows',
    database: 'employee_tracker_db',
});

// Function to start the application
cfonts.say('Employee Tracker', {
    font : 'block',
    align : 'center',
    color : 'pink',
    background : 'transparent',
    letterSpacing : 1,
    lineHeight : 1,
    space : true,
});

module.exports = db;