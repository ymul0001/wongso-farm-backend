'use strict';

const express = require('express');
const router = express.Router();
const listExpenditureController = require('../controllers/ExpenditureController/ListExpenditureController');
const createExpenditureController = require('../controllers/ExpenditureController/CreateExpenditureController');
const deleteExpenditureController = require('../controllers/ExpenditureController/DeleteExpenditureController');
const updateExpenditureController = require('../controllers/ExpenditureController/UpdateExpenditureController');

router.get(`/findByUserIdPaginated`, listExpenditureController.findByUserIdPaginated);
router.post(`/create`, createExpenditureController.createExpenditure);
router.delete(`/deleteById`, deleteExpenditureController.deleteExpenditureById);
router.put(`/updateById`, updateExpenditureController.updateExpenditureById);

module.exports = router;