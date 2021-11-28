'use strict';

const mysqlService = require('../../services/mysql');


const findAll = () => {
    return mysqlService.execute(`SELECT * FROM sales`);
}

const findByUserIdSorted = (userId, sortKey, sortOrder) => {
    return mysqlService.execute(`SELECT s.sales_date, c.customer_name, s.level, s.qty, s.price_per_item, s.total_price FROM sales s
                                 JOIN customer c ON s.customer_id = c.customer_id
                                 WHERE user_id = '${userId}' ORDER BY ${sortKey} ${sortOrder}`);
}

const createSales = (params) => {
    return mysqlService.execute(`INSERT INTO sales (sales_id, customer_id, user_id, sales_date, level, qty, price_per_item, total_price, date_created) VALUES (?,?,?,?,?,?,?,?,?)`, params);
} 

const deleteBySalesId = (salesId) => {
    return mysqlService.execute(`DELETE FROM sales WHERE sales_id = '${salesId}'`);
}

const deleteByCustomerId = (customerId) => {
    return mysqlService.execute(`DELETE FROM customer WHERE customer_id = '${customerId}'`);
}

const updateSalesById = (params, salesId) => {
    return mysqlService.execute(`UPDATE sales SET sales_date = '${params[0]}', customer_id = '${params[1]}', level = '${params[2]}', qty = ${params[3]}, price_per_item = ${params[4]}, total_price = ${params[5]}, date_created = '${params[6]}' WHERE sales_id = '${salesId}'`);
}


module.exports = {
    findAll,
    findByUserIdSorted, 
    createSales,
    deleteBySalesId,
    deleteByCustomerId,
    updateSalesById
}