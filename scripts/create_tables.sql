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

/*
  ALTER TABLE TO ADD FOREIGN KEY CONSTRAINTS
*/
ALTER TABLE wongso.expense
ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES wongso.user(user_id);