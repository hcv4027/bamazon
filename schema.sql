-- Drops the bamazon if it exists currently --
DROP DATABASE IF EXISTS bamazon;

-- Creates the "bamazon" database --
CREATE DATABASE bamazon;

-- Creates the table products --
CREATE TABLE products(
-- Creates a numeric column called item_id which will automatically increment iits value as we create new products. --
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,

-- This field captiures the name of the product. --
product_name VARCHAR(100) NOT NULL,

-- This field will capture the department the product will appear in, inside the store. --
department_name VARCHAR(50) NOT NULL,

-- This field will capture the price that the product will be list at, for sales to the public. --
price DECIMAL(10,2) NULL,

-- This field will capture the amount of stock of the product within the store seling it. --
stock_quantity INT NULL

-- Sets the primary key to item_id --
PRIMARY KEY(item_id)
);
