'use strict';

const Invoice = require('../../models/invoice/Invoice');
const StringUtils = require('../../commons/utils/StringUtils');
const ListUtils = require('../../commons/utils/ListUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode')

const listCustomerNames = async (req, res) => {
    const userid = req.query.userid;
    validateQueryParams(res, userid);
    const distinctCustomerNames = await Invoice.findDistinctCustomerNamesWithSales(userid);
    validateDistinctCustomerNames(res, distinctCustomerNames);
}


const validateQueryParams = (res, userid) => {
    if (StringUtils.isNullOrEmpty(userid)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'user id cannot be empty');
    }
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