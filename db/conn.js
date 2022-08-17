const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD || ''
});

db.connect(err => {
    if(err) {
        console.log(err.message);
    } else {
        console.log('Connected to database successfully!');
    }
});

var query = 'CREATE DATABASE if not exists mySqlApi';
db.query(query, (err) => {
    if(err) {
        console.log(err.message);
    } else {
        console.log('Database created successfully!');
    }
});

var query = 'USE mySqlApi';
db.query(query, (err) => {
    if(err) {
        console.log(err.message);
    } else {
        console.log('Connected to mySqlApi successfully!');
    }
});


var query = 'CREATE TABLE IF NOT EXISTS customer_data(id int AUTO_INCREMENT, name VARCHAR(50), email VARCHAR(50), phone int, posted_date TIMESTAMP default now(), PRIMARY KEY(id))';
db.query(query, (err) => {
    if(err) {
        console.log(err.message);
    } else {
        console.log('customer_data table is created successfully!');
    }
});

module.exports = db;