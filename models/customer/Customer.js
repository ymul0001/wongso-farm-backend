'use strict';

const mysqlService = require('../../services/mysql');

const findAll = () => {
    return mysqlService.execute(`SELECT * FROM customer`);
}

const findAllCustomerName = (userId) => {
    return mysqlService.execute(`SELECT DISTINCT c.customer_id, c.customer_name
                                 FROM customer c 
                                 JOIN usercustomer uc ON c.customer_id = uc.customer_id
                                 WHERE uc.user_id = '${userId}'`);
}

const findCustomerByUserIdSorted = (userId, sortKey, sortOrder) => {
    return mysqlService.execute(`SELECT c.customer_id, c.customer_initial, c.customer_name, c.customer_address, 0 AS total_order, 0 AS total_money 
                                 FROM customer c 
                                 JOIN usercustomer uc ON c.customer_id = uc.customer_id
                                 WHERE uc.user_id = '${userId}' ORDER BY ${sortKey} ${sortOrder}`);
}

const createCustomer = (params) => {
    return mysqlService.execute(`INSERT INTO customer (customer_id, customer_initial, customer_name, customer_address, date_created) VALUES (?,?,?,?,?)`, params);
}

const deleteCustomerById = (customerId) => {
    return mysqlService.execute(`DELETE FROM customer WHERE customer_id = '${customerId}'`);
}

const updateCustomerById = (params, customerId) => {
    return mysqlService.execute(`UPDATE customer SET customer_initial = '${params[0]}', customer_name = '${params[1]}', customer_address = '${params[2]}', date_created = '${params[3]}' WHERE customer_id = '${customerId}'`);
}

module.exports = {
    findAll,
    findCustomerByUserIdSorted,
    findAllCustomerName,
    createCustomer,
    deleteCustomerById,
    updateCustomerById
}