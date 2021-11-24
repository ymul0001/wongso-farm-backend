'use strict';

const Customer = require('../../models/customer/Customer');
const StringUtils = require('../../commons/utils/StringUtils');
const ListUtils = require('../../commons/utils/ListUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');


const findByUserIdPaginated = async (req, res) => {
    const userId = req.query.userid;
    const sortKey = req.query.sortkey;
    const sortOrder = req.query.sortorder;
    const page = req.query.page;
    const limit = req.query.limit;
    validateQueryParams(res, userId, sortKey, sortOrder, page, limit);
    const customers = await Customer.findCustomerByUserIdSorted(userId, sortKey, sortOrder);
    const totalCount = customers[0].length;
    const totalPage = Math.ceil(totalCount / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = (page * limit <= customers[0].length) ? page * limit : customers[0].length;
    customers[0] = customers[0].slice(startIndex, endIndex);
    const pageCount = customers[0].length;
    validateCustomersData(res, customers, totalCount, pageCount, parseInt(page), totalPage, startIndex, endIndex);
}


const validateQueryParams = (res, userId, sortKey, sortOrder, page, limit) => {
    if (StringUtils.isNullOrEmpty(userId)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'user id cannot be empty');
    }
    if (StringUtils.isNullOrEmpty(sortKey)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'sort key cannot be empty');
    }
    if (StringUtils.isNullOrEmpty(sortOrder)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'sort order cannot be empty');
    }
    if (StringUtils.isNullOrEmpty(page)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'page cannot be empty');
    }
    if (StringUtils.isNullOrEmpty(limit)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'limit cannot be empty');
    }
}

const validateCustomersData = (res, customers, totalCount, pageCount, currentPage, totalPages, startIndex, endIndex) => {
    if (ListUtils.isNullOrEmpty(customers[0])) {
        return Response.returnResponse(res, StatusCode.status.DATA_NOT_FOUND_EXCEPTION, "Cannot find valid customer data");
    }
    return Response.returnPaginatedResponse(res, StatusCode.status.SUCCESS, customers, totalCount, pageCount, currentPage, totalPages, startIndex, endIndex);
}

module.exports = {
    findByUserIdPaginated
}