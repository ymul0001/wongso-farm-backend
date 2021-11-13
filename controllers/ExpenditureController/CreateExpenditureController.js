'use strict';

const Expenditure = require('../../models/Expenditure/Expenditure');
const StringUtils = require('../../commons/utils/StringUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');
const { v4: uuidv4 } = require('uuid');

const createExpenditure = async (req,res) => {
    const expenseId = uuidv4();
    const userId = req.body.userid;
    const expenseDate = req.body.expensedate;
    const totalExpense = req.body.totalexpense;
    const productiveExpense = req.body.productiveexpense;
    const dateCreated = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().slice(0,19).replace('T',' ');
    const expenseNote = req.body.expensenote;
    validateParams(res, userId, expenseDate, totalExpense, productiveExpense, dateCreated);
    if (!StringUtils.isNullOrEmpty(userId) && !StringUtils.isNullOrEmpty(expenseDate) && !StringUtils.isNullOrEmpty(totalExpense) && !StringUtils.isNullOrEmpty(productiveExpense)) {
        const expenseData = [expenseId, userId, expenseDate, parseInt(totalExpense), parseInt(productiveExpense), dateCreated, expenseNote];
        await createExpense(expenseData, res);
        return Response.returnResponse(res,StatusCode.status.CREATED, `Expense record has been successfully created.`);
    }
}

const createExpense = async (expenseData, res) => {
    try {
        await Expenditure.createExpense(expenseData);
    }
    catch (e) {
        return Response.returnResponse(res,StatusCode.status.CONFLICT, `Encounter an error when creating note data. ${e}.`);
    }
}


const validateParams = (res, userId, expenseDate, totalExpense, productiveExpense, dateCreated) => {
    if (StringUtils.isNullOrEmpty(userId)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'user id cannot be empty!');
    }
    if (StringUtils.isNullOrEmpty(expenseDate)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'expense date cannot be empty!');
    }
    if (StringUtils.isNullOrEmpty(totalExpense)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'total expense cannot be empty!');
    }
    if (StringUtils.isNullOrEmpty(productiveExpense)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'productive expense cannot be empty!');
    }
    if (StringUtils.isNullOrEmpty(dateCreated)) {
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'date created cannot be empty!');
    }
}

module.exports = {
    createExpenditure
}