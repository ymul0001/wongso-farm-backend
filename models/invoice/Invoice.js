'use strict';

const mysqlService = require('../../services/mysql');

const findItemsForDailyInvoice = (customerName, salesDate) => {
    return mysqlService.execute(`
            SELECT c.customer_name, 
            COALESCE(c.customer_address, '-') AS customer_address,
            s.qty, 
            s.level,
            CASE
                WHEN s.level = 'kg' THEN 'Telur Kecil'
                WHEN s.level = 'piece' THEN 'Telur Kampung (Besar)'
            END AS item_name,
            s.price_per_item,
            s.total_price
            FROM wongso.sales s 
            JOIN wongso.customer c ON s.customer_id = c.customer_id
            WHERE c.customer_name = '${customerName}' AND s.sales_date = '${salesDate}';
        `)
}

const findDistinctCustomerNamesWithSales = (userid) => {
    return mysqlService.execute(`
        SELECT DISTINCT c.customer_name
        FROM wongso.sales s 
        JOIN wongso.customer c ON s.customer_id = c.customer_id
        WHERE s.user_id = '${userid}';
    `)
}

const findSalesDateForEachCustomerName = (customerName, userid) => {
    return mysqlService.execute(`
        SELECT DISTINCT SUBSTRING(s.sales_date, 1, 10) AS sales_date
        FROM wongso.sales s
        JOIN wongso.customer c ON s.customer_id = c.customer_id
        WHERE c.customer_name = '${customerName}'
        AND s.user_id = '${userid}';
    `)
}

module.exports = {
    findItemsForDailyInvoice,
    findDistinctCustomerNamesWithSales,
    findSalesDateForEachCustomerName
}