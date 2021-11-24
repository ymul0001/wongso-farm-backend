'use strict';

const mysqlService = require('../../services/mysql');

const findAll = () => {
    return mysqlService.execute(`SELECT * FROM usercustomer`);
}

const createUserCustomer = (params) => {
    return mysqlService.execute(`INSERT INTO usercustomer (user_id, customer_id) VALUES (?,?)`, params);
}

const deleteUserCustomerByCustomerId = (customerId) => {
    return mysqlService.execute(`DELETE FROM usercustomer WHERE customer_id = '${customerId}'`);
}


module.exports = {
    findAll,
    createUserCustomer,
    deleteUserCustomerByCustomerId
}