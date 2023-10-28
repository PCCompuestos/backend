
CREATE SEQUENCE userSeq start 1 increment 1;
CREATE SEQUENCE productSeq start 1 increment 1;
CREATE SEQUENCE oderSeq start 1 increment 1;

CREATE TABLE Users (
    ID          NUMERIC(9),
    name        VARCHAR(25),
    password    VARCHAR(25),
    isAdmin     BOOLEAN,
    email       VARCHAR(25),
    address     VARCHAR(25),
    PRIMARY KEY (ID)
);

CREATE TABLE Products (
    ID          NUMERIC(9),
    name        VARCHAR(25),
    description VARCHAR(25),
    quantity    NUMERIC(9),
    price       NUMERIC(9),
    PRIMARY KEY (ID)
);

CREATE TABLE has_in_shopping_cart (
    userID      NUMERIC(9),
    productID   NUMERIC(9),
    quantity    NUMERIC(9),
    PRIMARY KEY (userID, productID),
    FOREIGN KEY (userID) REFERENCES Users(ID),
    FOREIGN KEY (productID) REFERENCES Products(ID)
);


CREATE TABLE Orders (
    ID           NUMERIC(9),
    userID       NUMERIC(9),
    quantity     NUMERIC(9),
    purchaseDate DATE,
    purchaseTime TIME,
    PRIMARY KEY  (ID),
    FOREIGN KEY  (userID) REFERENCES Users(ID)
);

CREATE TABLE order_contains (
    orderID     NUMERIC(9),
    productID   NUMERIC(9),
    quantity    NUMERIC(9),
    PRIMARY KEY (orderID, productID),
    FOREIGN KEY (orderID) REFERENCES Orders(ID),
    FOREIGN KEY (productID) REFERENCES Products(ID)
);

CREATE TABLE Category (
    productID    NUMERIC(9),
    category     VARCHAR(25),
    PRIMARY KEY (productID, category),
    FOREIGN KEY (productID) REFERENCES Products(ID)
);

CREATE TABLE Component (
    code        NUMERIC(9),
    name        VARCHAR(25),
    quantity    NUMERIC(9),
    price       NUMERIC(9),
    PRIMARY KEY (code)
);

CREATE TABLE consists_of (
    componentCode    NUMERIC(9),
    productID        NUMERIC(9),
    FOREIGN KEY (componentCode) REFERENCES Component(code),
    FOREIGN KEY (productID) REFERENCES Products(ID)
);
