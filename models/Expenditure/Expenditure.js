'use strict';

const mysqlService = require('../../services/mysql');


const findAll = () => {
    return mysqlService.execute(`SELECT * FROM expense`);
}

const findByUserIdSortByExpenseDate = (userId, sortOrder) => {
    return mysqlService.execute(`SELECT * FROM expense WHERE user_id = '${userId}' ORDER BY expense_date ${sortOrder}`);
}

const createExpense = (params) => {
    return mysqlService.execute(`INSERT INTO expense (expense_id, user_id, expense_date, total_expense,  productive_expense, date_created, expense_note) VALUES (?,?,?,?,?,?,?)`, params);
} 

const deleteExpenseById = (expenseId) => {
    return mysqlService.execute(`DELETE FROM expense WHERE expense_id = '${expenseId}'`);
}

const updateExpenseById = (params, expenseId) => {
    return mysqlService.execute(`UPDATE expense SET expense_date = '${params[0]}', total_expense = '${params[1]}', productive_expense = '${params[2]}', expense_note = '${params[3]}', date_created = '${params[4]}' WHERE expense_id = '${expenseId}'`);
}


module.exports = {
    findAll,
    findByUserIdSortByExpenseDate, 
    createExpense,
    deleteExpenseById,
    updateExpenseById
}