const db = require('../db/conn');

const createCustomer = (req, res) => {
    const query = `INSERT into customer_data (name, email, phone) VALUES ( '${req.body.name}', '${req.body.email}', '${req.body.phone}' )`;
    db.query(query, (err) => {
        if(err) {
            res.status(500).json({err: err.message});
        } else {
            res.status(200).json('Data inserted to table succesfully!');
        }
    });
};

const deleteCustomer = (req, res) => {
    const query = `DELETE FROM customer_data WHERE email = '${req.params.email}'`;
    db.query(query, (err) => {
        if(err) {
            res.status(500).json({err: err.message});
        } else {
            res.status(200).json('One record deleted succesfully!');
        }
    });
};

const searchCustomer = (req, res) => {
    const query = `SELECT * FROM customer_data WHERE email = '${req.params.email}'`;
    db.query(query, (err, record) => {
        if(err) {
            res.status(500).json({err: err.message});
        } else {
            res.status(200).json(record);
        }
    });
};

const viewCustomers = (req, res) => {
    const query = `SELECT * FROM customer_data ORDER BY posted_date`;
    db.query(query, (err, record) => {
        if(err) {
            res.status(500).json({err: err.message});
        } else {
            res.status(200).json(record);
        }
    });
};

module.exports = { createCustomer, deleteCustomer, searchCustomer, viewCustomers };