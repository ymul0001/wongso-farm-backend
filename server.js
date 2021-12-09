'use strict';

const env = require('dotenv');
//const cors = require('cors');
env.config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const CredentialRouter = require('./routes/CredentialRoute');
const ExpenditureRouter = require('./routes/ExpenditureRoute');
const CustomerRouter = require('./routes/CustomerRoute');
const SalesRouter = require('./routes/SalesRoute');
const DashboardRouter = require('./routes/DashboardRoute');

//configure express dependencies
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Authorization");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD, OPTIONS")
    next();
});
//app.use(cors());
//app.options('*', cors());

//register routes 
app.use('/v1/dashboard', DashboardRouter);
app.use('/v1/credential', CredentialRouter);
app.use('/v1/expenditure', ExpenditureRouter);
app.use('/v1/customer', CustomerRouter);
app.use('/v1/sales', SalesRouter);


app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})

module.exports = app;