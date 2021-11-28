'use strict';

const Sales = require('../../models/sales/Sales');
const StringUtils = require('../../commons/utils/StringUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');
const { v4: uuidv4 } = require('uuid');

const create = async (req,res) => {
    const salesId = uuidv4();
    const userId = req.body.userid;
    const customerId = req.body.customerid;
    const salesDate = req.body.salesdate;
    const level = req.body.level;
    const qty = req.body.qty;
    const pricePerItem = req.body.priceperitem;
    const totalPrice = parseInt(qty) * parseInt(pricePerItem);
    const dateCreated = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().slice(0,19).replace('T',' ');
    validateParams(res, userId, customerId, salesDate, level, qty, pricePerItem);
    if (!StringUtils.isNullOrEmpty(userId) && !StringUtils.isNullOrEmpty(customerId) && !StringUtils.isNullOrEmpty(salesDate) && !StringUtils.isNullOrEmpty(level) && !StringUtils.isNullOrEmpty(qty) && !StringUtils.isNullOrEmpty(pricePerItem)) {
        const salesData = [salesId, customerId, userId, salesDate, level, parseInt(qty), parseInt(pricePerItem), totalPrice, dateCreated];
        await createSales(salesData, res);
        return Response.returnResponse(res, StatusCode.status.CREATED, `sales record has been successfully created.`);
    }
}

//(sales_id, customer_id, user_id, sales_date, level, qty, price_per_item, total_price, date_created)

const createSales = async (salesData, res) => {
    try {
        await Sales.createSales(salesData);
    }
    catch (e) {
        return Response.returnResponse(res, StatusCode.status.CONFLICT, `Encounter an error when creating sales data. ${e}.`);
    }
}

const validateParams = (res, userId, customerId, salesDate, level, qty, pricePerItem) => {
    if (StringUtils.isNullOrEmpty(userId)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'user id cannot be empty!');
    }
    if (StringUtils.isNullOrEmpty(customerId)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'customer id cannot be empty!');
    }
    if (StringUtils.isNullOrEmpty(salesDate)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'sales date cannot be empty!');
    }
    if (StringUtils.isNullOrEmpty(level)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'level cannot be empty!');
    }
    if (StringUtils.isNullOrEmpty(qty)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'sales quantity cannot be empty!');
    }
    if (StringUtils.isNullOrEmpty(pricePerItem)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'price per item cannot be empty!');
    }
}

module.exports = {
    create
}