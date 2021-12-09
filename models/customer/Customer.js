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
    return mysqlService.execute(`SELECT T1.customer_id, T1.customer_initial, T1.customer_name, T1.customer_address, COALESCE(T2.total_order,0) AS total_order, COALESCE(T2.total_price,0) AS total_price
                                 FROM (
                                 SELECT c.customer_id, c.customer_initial, c.customer_name, c.customer_address
                                 FROM customer c 
                                 JOIN usercustomer uc ON c.customer_id = uc.customer_id
                                 WHERE uc.user_id = '${userId}'
                                 ) T1 
                                 LEFT JOIN 
                                 (SELECT c.customer_id, SUM(s.qty) as total_order, SUM(s.total_price) as total_price 
                                 FROM customer c 
                                 JOIN sales s ON c.customer_id = s.customer_id
                                 WHERE s.user_id = '${userId}' AND s.level = 'piece'
                                 GROUP BY c.customer_id) T2 ON T1.customer_id = T2.customer_id
                                 ORDER BY ${sortKey} ${sortOrder};`);
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