
-- Tablas:
-- CREATE TABLE User (
--     ID          NUMERIC(9),
--     name        VARCHAR(25),
--     password    VARCHAR(25),
--     isAdmin     BOOLEAN,
--     email       VARCHAR(25),
--     address     VARCHAR(25),
--     PRIMARY KEY (ID)
-- );

-- CREATE TABLE has_in_shopping_cart (
--     userID      NUMERIC(9),
--     productID   NUMERIC(9),
--     quantity    NUMERIC(9),
--     PRIMARY KEY (userID, productID),
--     FOREIGN KEY (userID) REFERENCES User(ID),
--     FOREIGN KEY (productID) REFERENCES Product(ID)
-- );

-- CREATE TABLE Product (
--     ID          NUMERIC(9),
--     name        VARCHAR(25),
--     description VARCHAR(25),
--     quantity    NUMERIC(9),
--     price       NUMERIC(9),
--     PRIMARY KEY (ID)
-- );

-- CREATE TABLE Order (
--     ID           NUMERIC(9),
--     userID       NUMERIC(9),
--     quantity     NUMERIC(9),
--     purchaseDate DATE(YYYY-MM-DD),
--     purchaseTime TIME(HH:MM:SS),
--     PRIMARY KEY  (ID),
--     FOREIGN KEY  (userID) REFERENCES User(ID)
-- );

-- CREATE TABLE contains (
--     orderID     NUMERIC(9),
--     productID   NUMERIC(9),
--     PRIMARY KEY (orderID, productID),
--     FOREIGN KEY (orderID) REFERENCES Order(ID),
--     FOREIGN KEY (productID) REFERENCES Product(ID)
-- );

-- CREATE TABLE Category (
--     productID    NUMERIC(9),
--     category     VARCHAR(25),
--     PRIMARY KEY (productID, category),
--     FOREIGN KEY (productID) REFERENCES Product(ID)
-- );

-- CREATE TABLE Component (
--     code        NUMERIC(9),
--     name        VARCHAR(25),
--     quantity    NUMERIC(9),
--     price       NUMERIC(9),
--     PRIMARY KEY (code)
-- );

-- CREATE TABLE consists_of (
--     componentCode    NUMERIC(9),
--     productID        NUMERIC(9),
--     FOREIGN KEY (componentCode) REFERENCES Component(code),
--     FOREIGN KEY (productID) REFERENCES Product(ID)
-- );

INSERT INTO User VALUES (1, 'admin', 'admin', true, 'admin@admin.com', 'c/Admin, 1, 4ºA');
INSERT INTO has_in_shopping_cart VALUES (1, 1, 2);
INSERT INTO Product VALUES (1, 'Producto 1', 'Descripción del producto 1', 10, 100);
INSERT INTO Order VALUES (1, 1, 2, '2023-10-10', '12:00:00');
INSERT INTO contains VALUES (1, 1);
INSERT INTO Category VALUES (1, 'Categoría 1');
INSERT INTO Component VALUES (1, 'Componente 1', 10, 10);
INSERT INTO consists_of VALUES (1, 1);
