'use strict';

const express = require('express');
const router = express.Router();
const GetAllDashboardDataController = require('../controllers/DashboardController/GetAllDashboardDataController');

router.get(`/findGrossProfit`, GetAllDashboardDataController.findGrossProfit);
router.get(`/findNetProfit`, GetAllDashboardDataController.findNetProfit);
router.get(`/findSalesPerMonth`, GetAllDashboardDataController.findSalesPerMonth);

module.exports = router;