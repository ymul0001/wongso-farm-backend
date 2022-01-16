'use strict';

const Invoice = require('../../models/invoice/Invoice');
const StringUtils = require('../../commons/utils/StringUtils');
const ListUtils = require('../../commons/utils/ListUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');


const listInvoiceItems = async (req, res) => {
    const userId = req.query.userid;
    const customerName = req.query.customername;
    const salesDate = req.query.salesdate;
    validateQueryParams(res, userId, customerName, salesDate);
    const invoiceItems = await Invoice.findItemsForDailyInvoice(customerName, salesDate);
    validateInvoiceItemsData(res, invoiceItems);
}


const validateQueryParams = (res, userId, customerName, salesDate) => {
    if (StringUtils.isNullOrEmpty(userId)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'user id cannot be empty');
    }
    if (StringUtils.isNullOrEmpty(customerName)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'customer name cannot be empty');
    }
    if (StringUtils.isNullOrEmpty(salesDate)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'sales date cannot be empty');
    }
}

const validateInvoiceItemsData = (res, invoiceItems) => {
    if (ListUtils.isNullOrEmpty(invoiceItems[0])) {
        return Response.returnResponse(res, StatusCode.status.DATA_NOT_FOUND_EXCEPTION, "Cannot find valid invoice items data");
    }
    return Response.returnResponse(res, StatusCode.status.SUCCESS, invoiceItems[0]);
}


module.exports = {
    listInvoiceItems
}