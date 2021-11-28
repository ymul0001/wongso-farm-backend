'use strict';

const Sales = require('../../models/sales/Sales');
const StringUtils = require('../../commons/utils/StringUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');

const updateSalesById = async (req, res) => {
    const salesId = req.query.salesid;
    const salesDate = req.body.salesdate;
    const customerId = req.body.customerid;
    const level = req.body.level;
    const qty = req.body.qty;
    const pricePerItem = req.body.priceperitem;
    const totalPrice = parseInt(qty) * parseInt(pricePerItem);
    const dateCreated = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().slice(0,19).replace('T',' ');
    validateQueryParam(res,salesId);
    validateBodyParam(res, salesDate, customerId, level, qty, pricePerItem);
    if (!StringUtils.isNullOrEmpty(salesDate) && !StringUtils.isNullOrEmpty(customerId) && !StringUtils.isNullOrEmpty(level) && !StringUtils.isNullOrEmpty(qty) && !StringUtils.isNullOrEmpty(pricePerItem)) {
        const salesData = [salesDate, customerId, level, qty, pricePerItem, totalPrice, dateCreated];
        await updateSales(salesData, salesId, res);
        return Response.returnResponse(res,StatusCode.status.UPDATE_SUCCESS, `sales record has been successfully updated.`);
    }
}

//UPDATE sales SET sales_date = '${params[0]}', customer_id = '${params[1]}', level = '${params[2]}', qty = ${params[3]}, price_per_item = ${params[4]}, total_price = ${params[5]}, date_created = ${params[6]} WHERE sales_id = '${salesId}'`

const updateSales = async (salesData, salesId, res) => {
    try {
        await Sales.updateSalesById(salesData, salesId);
    }
    catch (e) {
        return Response.returnResponse(res,StatusCode.status.CONFLICT, `Encounter an error when updating sales data. ${e}.`);
    }
}

const validateQueryParam = (res, salesId) => {
    if (StringUtils.isNullOrEmpty(salesId)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'param sales id cannot be empty!');
    }
}

const validateBodyParam = (res, salesDate, customerId, level, qty, pricePerItem) => {
    if (StringUtils.isNullOrEmpty(salesDate)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'sales date cannot be empty!');
    }
    if (StringUtils.isNullOrEmpty(customerId)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'customer id cannot be empty!');
    }
    if (StringUtils.isNullOrEmpty(level)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'level cannot be empty!');
    }
    if (StringUtils.isNullOrEmpty(qty)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'item quantity cannot be empty!');
    }
    if (StringUtils.isNullOrEmpty(pricePerItem)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'price per item cannot be empty!');
    }
}

module.exports = {
    updateSalesById
}