'use strict';

const Invoice = require('../../models/invoice/Invoice');
const StringUtils = require('../../commons/utils/StringUtils');
const ListUtils = require('../../commons/utils/ListUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode')

const listSalesDate = async (req, res) => {
    const userid = req.query.userid;
    const customerName = req.query.customername;
    validateQueryParams(res, userid, customerName);
    const distinctSalesDates = await Invoice.findSalesDateForEachCustomerName(customerName, userid);
    validateDistinctSalesDate(res, distinctSalesDates);
}

const validateQueryParams = (res, userid, customername) => {
    if (StringUtils.isNullOrEmpty(userid)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'user id cannot be empty');
    }
    if (StringUtils.isNullOrEmpty(customername)) {
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