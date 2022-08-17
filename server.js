require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const customerRoute = require('./routes/customer');

app.use('/customer', customerRoute);

app.listen('3000', () => {
    console.log('Server is running on port: 3000');
});