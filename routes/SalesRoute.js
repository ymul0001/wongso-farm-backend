'use strict';

const express = require('express');
const router = express.Router();
const ListSalesController = require('../controllers/SalesController/ListSalesController');
const CreateSalesController = require('../controllers/SalesController/CreateSalesController');
const UpdateSalesController = require('../controllers/SalesController/UpdateSalesController');
const DeleteSalesController = require('../controllers/SalesController/DeleteSalesController');


router.get(`/findByUserIdPaginated`, ListSalesController.findByUserIdPaginated);
router.post(`/create`, CreateSalesController.create);
router.put( `/updateById`, UpdateSalesController.updateSalesById);
router.delete(`/deleteById`, DeleteSalesController.deleteSalesById);

module.exports = router;