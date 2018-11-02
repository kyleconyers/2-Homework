-- Drops the bamazon if it already exists --
DROP DATABASE IF EXISTS bamazon;
-- Create a database called bamazon --
CREATE DATABASE bamazon;
USE bamazon;

-- Use programming db for the following statements --

CREATE TABLE products(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(255),
  department_name VARCHAR(255),
  price INTEGER(5),
  stock_quantity INTEGER(5) UNSIGNED,
  PRIMARY KEY(id)



);

-- Create new example rows
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sock", "clothes", 2, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shoe", "clothes", 20, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hat", "clothes", 10, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("coat", "clothes", 60, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cd", "electronics", 20, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tape", "electronics", 10, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("movie", "electronics", 15, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("chair", "wares", 30, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("table", "wares", 75, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pans", "kitchen", 25, 30);

