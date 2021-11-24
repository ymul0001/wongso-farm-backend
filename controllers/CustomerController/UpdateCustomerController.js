'use strict';

const Customer = require('../../models/customer/Customer');
const StringUtils = require('../../commons/utils/StringUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');

const updateCustomerById = async (req, res) => {
    const customerId = req.query.customerid;
    const customerInitial = req.body.customerinitial;
    const customerName = req.body.customername;
    const customerAddress = req.body.customeraddress;
    const dateCreated = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().slice(0,19).replace('T',' ');
    validateQueryParam(res,customerId);
    validateBodyParam(res, customerInitial, customerName, customerAddress);
    if (!StringUtils.isNullOrEmpty(customerInitial) && !StringUtils.isNullOrEmpty(customerName) && !StringUtils.isNullOrEmpty(customerAddress)) {
        const customerData = [customerInitial, customerName, customerAddress, dateCreated];
        await updateCustomer(customerData, customerId, res);
        return Response.returnResponse(res,StatusCode.status.UPDATE_SUCCESS, `Customer record has been successfully updated.`);
    }
}
//(customer_id, customer_initial, customer_name, customer_address, date_created)
const updateCustomer = async (customerData, customerId, res) => {
    try {
        await Customer.updateCustomerById(customerData, customerId);
    }
    catch (e) {
        return Response.returnResponse(res,StatusCode.status.CONFLICT, `Encounter an error when updating customer data. ${e}.`);
    }
}

const validateQueryParam = (res, customerId) => {
    if (StringUtils.isNullOrEmpty(customerId)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'param customer id cannot be empty!');
    }
}

const validateBodyParam = (res, customerInitial, customerName, customerAddress) => {
    if (StringUtils.isNullOrEmpty(customerInitial)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'customer initial cannot be empty!');
    }
    if (StringUtils.isNullOrEmpty(customerName)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'customer name cannot be empty!');
    }
    if (StringUtils.isNullOrEmpty(customerAddress)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'customer address cannot be empty!');
    }
}

module.exports = {
    updateCustomerById
}