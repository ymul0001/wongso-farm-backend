'use strict';


const express = require('express');
const router = express.Router();
const listInvoiceItemsController = require('../controllers/InvoiceController/ListInvoiceItemsController');
const listDistinctCustomerNamesWithSalesController = require('../controllers/InvoiceController/ListDistinctCustomerNamesWithSalesController');
const listSalesDateForEachCustomerController = require('../controllers/InvoiceController/ListSalesDateForEachCustomerController');

router.get(`/findInvoiceItems`, listInvoiceItemsController.listInvoiceItems);
router.get( `/findDistinctCustomerNames`, listDistinctCustomerNamesWithSalesController.listCustomerNames);
router.get(`/findSalesDateForEachCustomerName`, listSalesDateForEachCustomerController.listSalesDate);


module.exports = router;