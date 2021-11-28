'use strict';

const Customer = require('../../models/customer/Customer');
const Sales = require('../../models/sales/Sales');
const UserCustomer = require('../../models/usercustomer/UserCustomer');
const StringUtils = require('../../commons/utils/StringUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');

const deleteCustomerById = async (req,res) => {
    const customerId = req.query.customerid;
    validateQueryParams(res, customerId);
    await deleteUserCustomer(res, customerId);
    await deleteSales(res, customerId);
    await deleteCustomer(res, customerId);
    return Response.returnResponse(res, StatusCode.status.DELETE_SUCCESS, `Expense record has been successfully deleted.`);
}

const deleteCustomer = async (res, customerId) => {
    try {
        await Customer.deleteCustomerById(customerId);
    }
    catch (e) {
        return Response.returnResponse(res, StatusCode.status.CONFLICT, `Encounter an error when deleting customer data. ${e}.`);
    }
}

const deleteSales = async (res, customerId) => {
    try {
        await Sales.deleteByCustomerId(customerId);
    }
    catch (e) {
        return Response.returnResponse(res, StatusCode.status.CONFLICT, `Encounter an error when deleting sales data. ${e}.`);
    }
}

const deleteUserCustomer = async (res, customerId) => {
    try {
        await UserCustomer.deleteUserCustomerByCustomerId(customerId);
    }
    catch (e) {
        return Response.returnResponse(res, StatusCode.status.CONFLICT, `Encounter an error when deleting customer data. ${e}.`);
    }
}
const validateQueryParams = (res, customerId) => {
    if (StringUtils.isNullOrEmpty(customerId)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'param customer id cannot be empty');
    }
}

module.exports = {
    deleteCustomerById
}