CREATE TABLE `wongso`.`user` (
  `user_id` VARCHAR(255) NOT NULL,
  `user_name` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `date_created` DATETIME NOT NULL,
  PRIMARY KEY (`user_id`));

CREATE TABLE `wongso`.`expense` (
`expense_id` VARCHAR(255) NOT NULL,
`user_id` VARCHAR(255) NOT NULL,
`expense_date` DATETIME NOT NULL,
`total_expense` INT NOT NULL,
`productive_expense` INT NOT NULL,
`date_created` DATETIME NULL,
PRIMARY KEY (`expense_id`));

CREATE TABLE `wongso`.`customer` (
  `customer_id` VARCHAR(255) NOT NULL,
  `customer_initial` VARCHAR(45) NOT NULL,
  `customer_name` VARCHAR(100) NOT NULL,
  `customer_address` VARCHAR(255),
  `date_created` DATETIME NULL,
  PRIMARY KEY (`customer_id`));

CREATE TABLE `wongso`.`usercustomer` (
  `user_id` VARCHAR(255) NOT NULL,
  `customer_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`user_id`, `customer_id`));

/*
  ALTER TABLE TO ADD FOREIGN KEY CONSTRAINTS
*/
ALTER TABLE wongso.expense
ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES wongso.user(user_id);

ALTER TABLE wongso.usercustomer
ADD CONSTRAINT fk_user_id_customer_table FOREIGN KEY (user_id) REFERENCES wongso.user(user_id);

ALTER TABLE wongso.usercustomer
ADD CONSTRAINT fk_customer_id_customer_table FOREIGN KEY (customer_id) REFERENCES wongso.customer(customer_id);