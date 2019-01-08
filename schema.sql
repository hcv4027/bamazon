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


Use bamazon;
-- The following statements will insert 10 products into the products table inside the Bamazon Database--
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Starting Out with Java 5', 'Reference/Textbooks', 59.95, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Neanderthal', 'Fiction', 24.95, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Murachs SQL Server Trainer', 'Reference/Textbooks', 79.95, 17);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('What Savage Beast', 'Fiction', 28.95, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Avengers vs X-Men', 'Fiction', 19.99, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Atlanta Braves Logo Cap', 'Licensed Merchandise', 29.95, 41);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Under Armour Compression Shirt', 'Sporting Goods', 18.95, 39);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('FitBit Alta', 'Wearable Electronics', 79.95, 52);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Sodastream Source', 'Household', 39.97, 26);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Dell 27-inch Computer Monitor', 'Electronics', 129.95, 7);
