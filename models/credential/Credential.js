'use strict';

const mysqlService = require('../../services/mysql');

const findAll = () => {
    return mysqlService.execute(`SELECT * FROM user`);
}

const findCredentialByUserNameAndPassword = (userName, password) => {
    return mysqlService.execute(`SELECT * FROM user WHERE user_name = '${userName}' AND password = '${password}'`);
}

module.exports = {
    findAll,
    findCredentialByUserNameAndPassword,
}