'use strict';

const returnResponse = (res, status, message) => {
    return res.status(status).json({
        status: status,
        ...(message.constructor === Array && {totalCount: message[0].length}),
        message: (message.constructor === Array) ? message[0] : message
    })
}

const returnPaginatedResponse = (res, status, message, totalCount, pageCount, currentPage, totalPages, startIndex, endIndex) => {
    return res.status(status).json({
        status: status,
        currentPage: currentPage,
        startIndex: startIndex,
        endIndex: endIndex,
        totalPages: totalPages,
        totalAvailableData: totalCount,
        totalCurrentPageData: pageCount,
        message: message[0]
    })
}

module.exports =  {
    returnResponse,
    returnPaginatedResponse
}