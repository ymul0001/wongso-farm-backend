'use strict';

const Expenditure = require('../../models/Expenditure/Expenditure');
const StringUtils = require('../../commons/utils/StringUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');

const deleteExpenditureById = async (req,res) => {
    const expenseId = req.query.expenseid;
    validateQueryParams(res, expenseId);
    await deleteExpense(res, expenseId);
    return Response.returnResponse(res, StatusCode.status.DELETE_SUCCESS, `Expense record has been successfully deleted.`);
}

const deleteExpense = async (res, expenseId) => {
    try {
        await Expenditure.deleteExpenseById(expenseId);
    }
    catch (e) {
        return Response.returnResponse(res,StatusCode.status.CONFLICT, `Encounter an error when deleting expense data. ${e}.`);
    }
}

const validateQueryParams = (res, expenseId) => {
    if (StringUtils.isNullOrEmpty(expenseId)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'param expense id cannot be empty');
    }
}

module.exports = {
    deleteExpenditureById
}