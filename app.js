const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const users = require('./routes/userRoutes');
const orders = require('./routes/orderRoutes');
const products = require('./routes/productRoutes');
const components = require('./routes/componentRoutes');
const category = require('./routes/categoryRoutes');

// Enable CORS for all routes
app.use(cors());

// Routes
app.use('/', users);
app.use('/', orders);
app.use('/', products);
app.use('/', components);
app.use('/', category);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
