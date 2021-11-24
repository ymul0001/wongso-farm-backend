'use strict';

const Customer = require('../../models/customer/Customer');
const UserCustomer = require('../../models/usercustomer/UserCustomer');
const StringUtils = require('../../commons/utils/StringUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');
const { v4: uuidv4 } = require('uuid');

const create = async (req,res) => {
    const customerId = uuidv4();
    const userId = req.body.userid;
    const customerInitial = req.body.customerinitial;
    const customerName = req.body.customername;
    const customerAddress = req.body.customeraddress;
    const dateCreated = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().slice(0,19).replace('T',' ');
    validateParams(res, userId, customerInitial, customerName);
    if (!StringUtils.isNullOrEmpty(userId) && !StringUtils.isNullOrEmpty(customerInitial) && !StringUtils.isNullOrEmpty(customerName)) {
        const customerData = [customerId, customerInitial, customerName, customerAddress, dateCreated];
        const userCustomerData = [userId, customerId];
        await createCustomer(customerData, res);
        await createUserCustomer(userCustomerData, res);
        return Response.returnResponse(res, StatusCode.status.CREATED, `customer record has been successfully created.`);
    }
}

const createCustomer = async (customerData, res) => {
    try {
        await Customer.createCustomer(customerData);
    }
    catch (e) {
        return Response.returnResponse(res, StatusCode.status.CONFLICT, `Encounter an error when creating customer data. ${e}.`);
    }
}

const createUserCustomer = async (userCustomerData, res) => {
    try {
        await UserCustomer.createUserCustomer(userCustomerData);
    }
    catch (e) {
        return Response.returnResponse(res, StatusCode.status.CONFLICT, `Encounter an error when creating user customer data. ${e}`)
    }
}


const validateParams = (res, userId, customerInitial, customerName) => {
    if (StringUtils.isNullOrEmpty(userId)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'user id cannot be empty!');
    }
    if (StringUtils.isNullOrEmpty(customerInitial)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'customer initial cannot be empty!');
    }
    if (StringUtils.isNullOrEmpty(customerName)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'customer name cannot be empty!');
    }
}

module.exports = {
    create
}