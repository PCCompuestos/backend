
CREATE SEQUENCE userSeq start 1 increment 1;
CREATE SEQUENCE productSeq start 1 increment 1;
CREATE SEQUENCE orderSeq start 1 increment 1;
CREATE SEQUENCE componentSeq start 1 increment 1;

CREATE TABLE Users (
    ID          NUMERIC(9) PRIMARY KEY,
    name        VARCHAR(25) NOT NULL,
    password    VARCHAR(100) NOT NULL,
    isAdmin     BOOLEAN NOT NULL,
    email       VARCHAR(25) NOT NULL,
    address     VARCHAR(25)
);

CREATE TYPE component_type AS ENUM ('CPU', 'GPU', 'RAM', 'Motherboard', 'Storage', 'Power supply', 'Case', 'Cooling', 'Other');

CREATE TABLE Component (
    ID          NUMERIC(9) PRIMARY KEY,
    name        VARCHAR(25) NOT NULL,
    quantity    NUMERIC(9) NOT NULL,
    price       NUMERIC(9) NOT NULL,
    type        component_type NOT NULL
);

CREATE TABLE Products (
    ID          NUMERIC(9) PRIMARY KEY,
    name        VARCHAR(25) NOT NULL,
    description VARCHAR(25),
    quantity    NUMERIC(9) NOT NULL,
    price       NUMERIC(9) NOT NULL,
    url         VARCHAR(50) NOT NULL UNIQUE,
    image       VARCHAR(50) NOT NULL
);

CREATE TABLE has_in_shopping_cart (
    userID      NUMERIC(9),
    productID   NUMERIC(9),
    quantity    NUMERIC(9) NOT NULL,
    PRIMARY KEY (userID, productID),
    FOREIGN KEY (userID) REFERENCES Users(ID),
    FOREIGN KEY (productID) REFERENCES Products(ID)
);

CREATE TYPE order_status AS ENUM ('Not prepared', 'In preparation', 'Sent', 'Delivered');

CREATE TABLE Orders (
    ID           NUMERIC(9) PRIMARY KEY,
    userID       NUMERIC(9) NOT NULL,
    purchaseDate TIMESTAMP NOT NULL,
    status       order_status NOT NULL,
    FOREIGN KEY  (userID) REFERENCES Users(ID)
);

CREATE TABLE order_contains (
    orderID     NUMERIC(9),
    productID   NUMERIC(9),
    quantity    NUMERIC(9) NOT NULL,
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

CREATE TABLE consists_of (
    componentID    NUMERIC(9),
    productID      NUMERIC(9),
    PRIMARY KEY (componentID, productID),
    FOREIGN KEY (componentID) REFERENCES Component(ID),
    FOREIGN KEY (productID) REFERENCES Products(ID)
);
