'use strict';

const Expenditure = require('../../models/Expenditure/Expenditure');
const StringUtils = require('../../commons/utils/StringUtils');
const ListUtils = require('../../commons/utils/ListUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');


const findByUserIdPaginated = async (req, res) => {
    const userId = req.query.userid;
    const sortOrder = req.query.sortorder;
    const page = req.query.page;
    const limit = req.query.limit;
    validateQueryParams(res, userId, sortOrder, page, limit);
    const expenditures = await Expenditure.findByUserIdSortByExpenseDate(userId, sortOrder);
    const totalCount = expenditures[0].length;
    const totalPage = Math.ceil(totalCount / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = (page * limit <= expenditures[0].length) ? page * limit : expenditures[0].length;
    expenditures[0] = expenditures[0].slice(startIndex, endIndex);
    const pageCount = expenditures[0].length;
    validateExpendituresData(res, expenditures, totalCount, pageCount, parseInt(page), totalPage);
}


const validateQueryParams = (res, userId, order, page, limit) => {
    if (StringUtils.isNullOrEmpty(userId)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'user id cannot be empty');
    }
    if (StringUtils.isNullOrEmpty(order)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'sort order cannot be empty');
    }
    if (StringUtils.isNullOrEmpty(page)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'page cannot be empty');
    }
    if (StringUtils.isNullOrEmpty(limit)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'limit cannot be empty');
    }
}

const validateExpendituresData = (res, expenditures, totalCount, pageCount, currentPage, totalPages) => {
    if (ListUtils.isNullOrEmpty(expenditures[0])) {
        return Response.returnResponse(res, StatusCode.status.DATA_NOT_FOUND_EXCEPTION, "Cannot find valid expense data");
    }
    return Response.returnPaginatedResponse(res, StatusCode.status.SUCCESS, expenditures, totalCount, pageCount, currentPage, totalPages);
}

module.exports = {
    findByUserIdPaginated
}