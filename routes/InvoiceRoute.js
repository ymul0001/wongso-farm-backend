'use strict';


const express = require('express');
const router = express.Router();
const listInvoiceItemsController = require('../controllers/InvoiceController/ListInvoiceItemsController');

router.get(`/findInvoiceItems`, listInvoiceItemsController.listInvoiceItems);

module.exports = router;