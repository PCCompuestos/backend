
CREATE SEQUENCE userSeq start 1 increment 1;
CREATE SEQUENCE productSeq start 1 increment 1;
CREATE SEQUENCE orderSeq start 1 increment 1;
CREATE SEQUENCE componentSeq start 1000 increment 1;

CREATE TABLE Users (
    ID          NUMERIC(9) PRIMARY KEY,
    name        VARCHAR(25) NOT NULL,
    password    VARCHAR(100) NOT NULL,
    isAdmin     BOOLEAN NOT NULL,
    email       VARCHAR(25) NOT NULL,
    address     VARCHAR(25)
);


-- id_producto, marca, modelo, precio, descuento, descripcion, stock, ventas, tipo
CREATE TABLE Component (
    ID          NUMERIC(9) PRIMARY KEY,
    brand       VARCHAR(25) NOT NULL,
    model       VARCHAR(50) NOT NULL,
    price       NUMERIC(9,2)  NOT NULL,
    discount    NUMERIC(4,2)  NOT NULL,
    description VARCHAR(100),
    quantity    NUMERIC(9)  NOT NULL,
    numberSales NUMERIC(9)  NOT NULL,
    type        VARCHAR(25) NOT NULL 
                CHECK (type IN ('procesador', 'grafica', 'ram', 'placa_base', 'disco_duro', 
                                'fuente_alimentacion', 'caja_torre', 'ventilador'))
);

CREATE TABLE Products (
    ID          NUMERIC(9) PRIMARY KEY,
    name        VARCHAR(25) NOT NULL,
    description VARCHAR(50),
    quantity    NUMERIC(9) NOT NULL,
    price       NUMERIC(9,2) NOT NULL,
    url         VARCHAR(50) NOT NULL UNIQUE,
    image       VARCHAR(50) NOT NULL
);

CREATE TABLE consists_of (
    componentID    NUMERIC(9),
    productID      NUMERIC(9),
    PRIMARY KEY (componentID, productID),
    FOREIGN KEY (componentID) REFERENCES Component(ID),
    FOREIGN KEY (productID) REFERENCES Products(ID)
);


CREATE VIEW product_component AS (
    SELECT p.ID AS productID, c.ID AS componentID, c.brand || ' ' || c.model AS componentName, 
        c.type AS componentType
    FROM Products p
    JOIN consists_of co ON p.ID = co.productID
    JOIN Component c ON co.componentID = c.ID
);

CREATE TABLE has_in_shopping_cart (
    userID      NUMERIC(9),
    productID   NUMERIC(9),
    quantity    NUMERIC(9) NOT NULL,
    PRIMARY KEY (userID, productID),
    FOREIGN KEY (userID) REFERENCES Users(ID),
    FOREIGN KEY (productID) REFERENCES Products(ID)
);


CREATE TABLE Orders (
    ID           NUMERIC(9) PRIMARY KEY,
    userID       NUMERIC(9) NOT NULL,
    purchaseDate TIMESTAMP NOT NULL,
    status       VARCHAR(20) NOT NULL CHECK (status IN ('Not prepared', 'In preparation', 'Sent', 'Delivered')),
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
