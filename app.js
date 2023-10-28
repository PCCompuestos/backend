const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const users = require('./routes/userRoutes');
const orders = require('./routes/orderRoutes');
const products = require('./routes/productRoutes');

// Enable CORS for all routes
app.use(cors());

// Routes
app.use('/', users);
app.use('/', orders);
app.use('/', products);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
