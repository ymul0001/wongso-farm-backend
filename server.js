'use strict';

const env = require('dotenv');
const cors = require('cors');
env.config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const CredentialRouter = require('./routes/CredentialRoute');
const ExpenditureRouter = require('./routes/ExpenditureRoute');
const CustomerRouter = require('./routes/CustomerRoute');


//configure express dependencies
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*'
}));
app.options('*', cors());

//register routes 
app.use('/v1/credential', CredentialRouter);
app.use('/v1/expenditure', ExpenditureRouter);
app.use('/v1/customer', CustomerRouter);

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})

module.exports = app;