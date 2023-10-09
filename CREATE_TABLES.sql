/*
 * File: 	CREATE_TABLES.sql
 * Authors: Javier Sin Pelayo,	843442
 * 			Andrés Yubero Segura, 842236
 * 			Jesús López Ansón,	839922
 * Date: octubre 2023
 * Coms: Sentencias que crean las tablas de la base de datos de la tienda de productos tecnológicos PCCompuestos
*/

-- Base de datos PostgreSQL

CREATE TABLE User (
    ID          NUMBER(9),
    name        VARCHAR(25),
    password    VARCHAR(25),
    isAdmin     BOOLEAN,
    email       VARCHAR(25),
    address     VARCHAR(25),
    PRIMARY KEY (ID)
);

CREATE TABLE has_in_shopping_cart (
    userID      NUMBER(9),
    productID   NUMBER(9),
    quantity    NUMBER(9),
    PRIMARY KEY (userID, productID),
    FOREIGN KEY (userID) REFERENCES User(ID),
    FOREIGN KEY (productID) REFERENCES Product(ID)
);

CREATE TABLE Product (
    ID          NUMBER(9),
    name        VARCHAR(25),
    description VARCHAR(25),
    quantity    NUMBER(9),
    price       NUMBER(9),
    PRIMARY KEY (ID)
);

CREATE TABLE Order (
    ID           NUMBER(9),
    userID       NUMBER(9),
    quantity     NUMBER(9),
    purchaseDate DATE(YYYY-MM-DD),
    purchaseTime TIME(HH:MM:SS),
    PRIMARY KEY  (ID),
    FOREIGN KEY  (userID) REFERENCES User(ID)
);

CREATE TABLE contains (
    orderID     NUMBER(9),
    productID   NUMBER(9),
    PRIMARY KEY (orderID, productID),
    FOREIGN KEY (orderID) REFERENCES Order(ID),
    FOREIGN KEY (productID) REFERENCES Product(ID)
);

CREATE TABLE Category (
    productID    NUMBER(9),
    category     VARCHAR(25),
    PRIMARY KEY (productID, category),
    FOREIGN KEY (productID) REFERENCES Product(ID)
);

CREATE TABLE Component (
    code        NUMBER(9),
    name        VARCHAR(25),
    quantity    NUMBER(9),
    price       NUMBER(9),
    PRIMARY KEY (code)
);

CREATE TABLE consists_of (
    componentCode    NUMBER(9),
    productID        NUMBER(9),
    FOREIGN KEY (componentCode) REFERENCES Component(code),
    FOREIGN KEY (productID) REFERENCES Product(ID)
);
