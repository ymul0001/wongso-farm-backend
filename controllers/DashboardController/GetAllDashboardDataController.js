'use strict';

const Dashboard = require('../../models/dashboard/Dashboard');
const StringUtils = require('../../commons/utils/StringUtils');
const ListUtils = require('../../commons/utils/ListUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');


const findGrossProfit = async (req, res) => {
    const userId = req.query.userid;
    validateQueryParams(res, userId);
    const grossProfit = await Dashboard.findGrossProfit(userId);
    validateData(res, grossProfit);
}

const findNetProfit = async (req, res) => {
    const userId = req.query.userid;
    validateQueryParams(res, userId);
    const netProfit = await Dashboard.findNetProfit(userId);
    validateData(res, netProfit);
}

const findSalesPerMonth = async (req, res) => {
    const userId = req.query.userid;
    validateQueryParams(res, userId);
    const salesPerMonth = await Dashboard.findSalesPerMonth(userId);
    validateData(res, salesPerMonth);
}

const validateQueryParams = (res, userId) => {
    if (StringUtils.isNullOrEmpty(userId)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'user id cannot be empty');
    }
}

const validateData = (res, data) => {
    if (ListUtils.isNullOrEmpty(data)) {
        return Response.returnResponse(res, StatusCode.status.DATA_NOT_FOUND_EXCEPTION, "Cannot find valid data");
    }
    return Response.returnResponse(res, StatusCode.status.SUCCESS, data);
}

module.exports = {
    findGrossProfit,
    findNetProfit,
    findSalesPerMonth
}