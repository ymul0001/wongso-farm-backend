'use strict';

const Invoice = require('../../models/invoice/Invoice');
const StringUtils = require('../../commons/utils/StringUtils');
const ListUtils = require('../../commons/utils/ListUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode')

const listSalesDate = async (req, res) => {
    const customerName = req.query.customername;
    validateQueryParams(res, customerName);
    const distinctSalesDates = await Invoice.findSalesDateForEachCustomerName(customerName);
    validateDistinctSalesDate(res, distinctSalesDates);
}

const validateQueryParams = (res, customerName) => {
    if (StringUtils.isNullOrEmpty(customerName)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'customer name cannot be empty');
    }
}

const validateDistinctSalesDate = (res, distinctSalesDates) => {
    if (ListUtils.isNullOrEmpty(distinctSalesDates)) {
        return Response.returnResponse(res, StatusCode.status.DATA_NOT_FOUND_EXCEPTION, "Cannot find sales date according to the customer name");
    }
    return Response.returnResponse(res, StatusCode.status.SUCCESS, distinctSalesDates);
}


module.exports = {
    listSalesDate
}