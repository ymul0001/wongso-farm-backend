'use strict';

const express = require('express');
const router = express.Router();
const listCustomerController = require('../controllers/CustomerController/ListCustomerController');
const listCustomerNamesController = require('../controllers/CustomerController/ListCustomerNamesController');
const createCustomerController = require('../controllers/CustomerController/CreateCustomerController');
const deleteCustomerController = require('../controllers/CustomerController/DeleteCustomerController');
const updateCustomerController = require('../controllers/CustomerController/UpdateCustomerController');

router.get(`/findByUserIdPaginated`, listCustomerController.findByUserIdPaginated);
router.get(`/findCustomerNamesByUserId`, listCustomerNamesController.findAllCustomerNames);
router.post(`/create`, createCustomerController.create);
router.delete(`/deleteById`, deleteCustomerController.deleteCustomerById);
router.put(`/updateById`, updateCustomerController.updateCustomerById);

module.exports = router;