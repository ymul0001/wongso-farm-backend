'use strict';

const mysqlService = require('../../services/mysql');

const findGrossProfit = (userId) => {
    return mysqlService.execute(`SELECT SUM(total_price) AS gross_profit FROM sales
                                 WHERE user_id = '${userId}';`);
}

const findNetProfit = (userId) => {
    return mysqlService.execute(`SELECT (T2.gross_profit - T1.total_expense) AS net_profit
                                 FROM 
                                 (SELECT user_id, SUM(total_expense) AS total_expense FROM expense WHERE user_id = '${userId}') T1
                                 JOIN
                                 (SELECT user_id, SUM(total_price) AS gross_profit FROM sales WHERE user_id = '${userId}') T2
                                 ON T1.user_id = T2.user_id;`)
}

const findSalesPerMonth = (userId) => {
    return mysqlService.execute(`SELECT 
                                    T2.month, COALESCE(T3.total_sales, 0) AS total_sales
                                FROM
                                    (SELECT 
                                        T1.month
                                    FROM
                                        (SELECT 'January' AS month UNION SELECT 'February' AS month UNION SELECT 'March' AS month UNION SELECT 'April' AS month UNION SELECT 'May' AS month UNION SELECT 'June' AS month UNION SELECT 'July' AS month UNION SELECT 'August' AS month UNION SELECT 'September' AS month UNION SELECT 'October' AS month UNION SELECT 'November' AS month UNION SELECT 'December' AS month) T1) T2
                                        LEFT JOIN
                                    (SELECT 
                                        MONTHNAME(sales_date) AS month, SUM(total_price) AS total_sales
                                    FROM
                                        wongso.sales
                                    WHERE user_id = '${userId}'
                                    GROUP BY MONTHNAME(sales_date)) T3 ON T2.month = T3.month;`)
}

module.exports = {
    findGrossProfit,
    findNetProfit,
    findSalesPerMonth
}