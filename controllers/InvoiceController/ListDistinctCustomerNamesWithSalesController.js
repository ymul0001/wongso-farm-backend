'use strict';

const Invoice = require('../../models/invoice/Invoice');
const StringUtils = require('../../commons/utils/StringUtils');
const ListUtils = require('../../commons/utils/ListUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode')

const listCustomerNames = async (req, res) => {
    const distinctCustomerNames = await Invoice.findDistinctCustomerNamesWithSales();
    validateDistinctCustomerNames(res, distinctCustomerNames);
}


const validateDistinctCustomerNames = (res, distinctCustomerNames) => {
    if (ListUtils.isNullOrEmpty(distinctCustomerNames)) {
        return Response.returnResponse(res, StatusCode.status.DATA_NOT_FOUND_EXCEPTION, "Cannot find customer names");
    }
    return Response.returnResponse(res, StatusCode.status.SUCCESS, distinctCustomerNames);
}


module.exports = {
    listCustomerNames
}