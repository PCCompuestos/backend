

INSERT INTO Users (ID, name, password, isAdmin, email, address)
VALUES 
    (nextval('userSeq'), 'admin', 'admin', true, 'admin@admin.com', 'c/Admin, 1, 4ºA'),
    (nextval('userSeq'), 'sin', 'anson', false, 'javierito@putoUnai.com', 'c/Maria de Luna, 22');

-- Component
INSERT INTO Component (ID, name, quantity, price, type) 
VALUES 
    (nextval('componentSeq'), 'Component1 CPU', 10, 100.5, 'CPU'),
    (nextval('componentSeq'), 'Component2 GPU', 10, 100, 'GPU'),
    (nextval('componentSeq'), 'Component3 RAM', 10, 100, 'RAM'),
    (nextval('componentSeq'), 'Component4 Motherboard', 10, 100, 'Motherboard'),
    (nextval('componentSeq'), 'Component5 Storage', 10, 100, 'Storage'),
    (nextval('componentSeq'), 'Component6 Power', 10, 100, 'Power supply'),
    (nextval('componentSeq'), 'Component7 Case', 10, 100, 'Case'),
    (nextval('componentSeq'), 'Component8 Cooling', 10, 100, 'Cooling'),
    (nextval('componentSeq'), 'Component9 other', 10, 100, 'Other');

-- Products
INSERT INTO Products (ID, name, description, quantity, price, url, image) 
VALUES 
    (nextval('productSeq'), 'Product1', 'This is product 1', 10, 100, 'url1', 'image1');

-- has_in_shopping_cart
INSERT INTO has_in_shopping_cart (userID, productID, quantity) 
VALUES 
    (1, 1, 2);

-- Orders
INSERT INTO Orders (ID, userID, purchaseDate, status) 
VALUES 
    (nextval('orderSeq'), 1, '2023-10-10', 'Not prepared');

-- order_contains
INSERT INTO order_contains (orderID, productID, quantity) 
VALUES 
    (1, 1, 2);

-- Category
INSERT INTO Category (productID, category) 
VALUES 
    (1, 'Category1');

-- consists_of
INSERT INTO consists_of (componentCode, productID) 
VALUES 
    (1, 1),
    (1, 2),
    (1, 3),
    (1, 4),
    (1, 5),
    (1, 6),
    (1, 7),
    (1, 8),
    (1, 9);
