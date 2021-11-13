'use strict';

const Expenditure = require('../../models/Expenditure/Expenditure');
const StringUtils = require('../../commons/utils/StringUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');

const updateExpenditureById = async (req, res) => {
    const expenseId = req.query.expenseid;
    const expenseDate = req.body.expensedate;
    const totalExpense = req.body.totalexpense;
    const productiveExpense = req.body.productiveexpense;
    const expenseNote = req.body.expensenote;
    const dateCreated = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().slice(0,19).replace('T',' ');
    validateQueryParam(res,expenseId);
    validateBodyParam(res, expenseDate, totalExpense, productiveExpense);
    if (!StringUtils.isNullOrEmpty(expenseDate) && !StringUtils.isNullOrEmpty(totalExpense) && !StringUtils.isNullOrEmpty(productiveExpense)) {
        const expenseData = [expenseDate, totalExpense, productiveExpense, expenseNote, dateCreated];
        await updateExpense(expenseData, expenseId, res);
        return Response.returnResponse(res,StatusCode.status.UPDATE_SUCCESS, `Expense record has been successfully updated.`);
    }
}

const updateExpense = async (expenseData, expenseId, res) => {
    try {
        await Expenditure.updateExpenseById(expenseData, expenseId);
    }
    catch (e) {
        return Response.returnResponse(res,StatusCode.status.CONFLICT, `Encounter an error when updating expense data. ${e}.`);
    }
}

const validateQueryParam = (res, expenseId) => {
    if (StringUtils.isNullOrEmpty(expenseId)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'param expense id cannot be empty!');
    }
}

const validateBodyParam = (res, expenseDate, totalExpense, productiveExpense) => {
    if (StringUtils.isNullOrEmpty(expenseDate)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'expense date cannot be empty!');
    }
    if (StringUtils.isNullOrEmpty(totalExpense)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'total expense cannot be empty!');
    }
    if (StringUtils.isNullOrEmpty(productiveExpense)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'productive expense cannot be empty!');
    }
}

module.exports = {
    updateExpenditureById
}