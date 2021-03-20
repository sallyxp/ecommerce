-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

Use ecommerce_db;
CREATE TABLE category (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR (30) NOT NULL
);

CREATE TABLE product (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR (30) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  need to do validation
);
