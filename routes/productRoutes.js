const express = require('express');
const router = express.Router();
const product = require('../controllers/productController');

router.use(express.json());

// GET requests
router.get('/products', async (req, res) => {
  res.send((await product.getAllProducts()).rows);
});

router.get('/products/id/:id', async (req, res) => {
  res.send(await product.getProductById(req.params.id));
})

router.get('/products/:url', async (req, res) => {
  res.send(await product.getProductByUrl(req.params.url));
})

// POST requests
router.post('/products/search', async (req, res) => {
  const { cpu, ram, graphics, storage } = req.body;
  res.send((await product.search(cpu, ram, graphics, storage)).rows);
})

router.post('/products', async (req, res) => {
  const { name, description, quantity, price, url, image } = req.body;

  // Check request parameters (AÑADIR MÁS CHECKEOS!!!)
  // if (!name || !password || !email || !address) {
  //   return res.status(400).json({ message: 'Please provide name, password, and email.' });
  // }

  res.send(await product.createProduct(name, description, quantity, price, url, image));
});


// PUT requests
router.put('/products/:id', async (req, res) => {
  const { name, description, quantity, price, url, image } = req.body;

  res.send(await product.updateProductById(req.params.id, name, description, quantity, price, url, image));
});


// DELETE requests
router.delete('/products/:id', async (req, res) => {
  res.send(await product.deleteProductById(req.params.id));
});


module.exports = router;
