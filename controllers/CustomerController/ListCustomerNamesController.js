'use strict';

const Customer = require('../../models/customer/Customer');
const StringUtils = require('../../commons/utils/StringUtils');
const ListUtils = require('../../commons/utils/ListUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');


const findAllCustomerNames = async (req, res) => {
    const userId = req.query.userid;
    validateQueryParams(res, userId);
    const customerNames = await Customer.findAllCustomerName(userId);
    validateCustomerNamesData(res, customerNames);
}


const validateQueryParams = (res, userId) => {
    if (StringUtils.isNullOrEmpty(userId)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'user id cannot be empty');
    }
}

const validateCustomerNamesData = (res, customerNames) => {
    if (ListUtils.isNullOrEmpty(customerNames[0])) {
        return Response.returnResponse(res, StatusCode.status.DATA_NOT_FOUND_EXCEPTION, "Cannot find valid customer names data");
    }
    return Response.returnPaginatedResponse(res, StatusCode.status.SUCCESS, customerNames);
}

module.exports = {
    findAllCustomerNames
}