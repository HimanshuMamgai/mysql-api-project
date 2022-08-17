const express = require('express');

const router = express.Router();

const { createCustomer, deleteCustomer, searchCustomer, viewCustomers } = require('../controllers/customer');

router.post('/create', createCustomer);

router.delete('/delete/:email', deleteCustomer);

router.get('/search/:email', searchCustomer);

router.get('/view', viewCustomers);

module.exports = router;