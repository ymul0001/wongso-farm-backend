'use strict';

const Sales = require('../../models/sales/Sales');
const StringUtils = require('../../commons/utils/StringUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');

const deleteSalesById = async (req,res) => {
    const salesId = req.query.salesid;
    validateQueryParams(res, salesId);
    await deleteSales(res, salesId);
    return Response.returnResponse(res, StatusCode.status.DELETE_SUCCESS, `Sales record has been successfully deleted.`);
}

const deleteSales = async (res, salesId) => {
    try {
        await Sales.deleteBySalesId(salesId);
    }
    catch (e) {
        return Response.returnResponse(res, StatusCode.status.CONFLICT, `Encounter an error when deleting sales data. ${e}.`);
    }
}

const validateQueryParams = (res, salesId) => {
    if (StringUtils.isNullOrEmpty(salesId)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'param sales id cannot be empty');
    }
}

module.exports = {
    deleteSalesById
}