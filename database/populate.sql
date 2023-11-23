
INSERT INTO Users (ID, name, password, isAdmin, email, address)
VALUES 
    (nextval('userSeq'), 'admin', 'admin', true, 'admin@admin.com', 'c/Admin, 1, 4ºA'),
    (nextval('userSeq'), 'sin', 'anson', false, 'javierito@putoUnai.com', 'c/Maria de Luna, 22');

-- Component
-- populate_component.sql

-- Products
INSERT INTO Products (ID, name, description, quantity, price, url, image) 
VALUES 
    (nextval('productSeq'), 'HP 15S-FQ5085NS', 'This is product 1', 10, 100, 'hpExample', '../images/hp.webp'),
    (nextval('productSeq'), 'Lenovo IdeaPad 3', 'This is product 2', 5, 199.99, 'lenovoExample', '../images/lenovo.webp'),
    (nextval('productSeq'), 'MSI Pulse 15', 'This is product 3', 3, 221.99, 'msiExample', '../images/msi.webp');

-- has_in_shopping_cart
INSERT INTO has_in_shopping_cart (userID, productID, quantity) 
VALUES 
    (1, 1, 2);

-- Orders
INSERT INTO Orders (ID, userID, purchaseDate, status) 
VALUES 
    (nextval('orderSeq'), 1, '2023-10-10', 'Not prepared'),
    (nextval('orderSeq'), 1, '2023-10-11', 'Sent');

-- order_contains
INSERT INTO order_contains (orderID, productID, quantity) 
VALUES 
    (1, 1, 2),
    (2, 3, 1);

-- Category
INSERT INTO Category (productID, category) 
VALUES 
    (1, 'Category1');

-- consists_of
INSERT INTO consists_of (productID, componentID) 
VALUES 
    (1, 1),
    (2, 2),
    (1, 301),
    (2, 302),
    (1, 201),
    (2, 202),
    (1, 101),
    (2, 102)
    ;
