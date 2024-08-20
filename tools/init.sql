create database cqrs_product;

CREATE TABLE products
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    manufacturer VARCHAR(255),
    country VARCHAR(255),
    unitPrice INT,
    createdOn TIMESTAMP,
    modifiedOn TIMESTAMP
);
