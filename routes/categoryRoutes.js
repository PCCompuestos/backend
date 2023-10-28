const express = require('express');
const router = express.Router();
const product = require('../controllers/categoryController');

router.use(express.json());

// GET requests
router.get('/categories', async (req, res) => {
  res.send((await product.getAllCategories()).rows);
});

// router.get('/products/:id', async (req, res) => {
//   res.send(await product.getProductById(req.params.id));
// });


// POST requests
router.post('/categories', async (req, res) => {
  const { productID, category } = req.body;

  // Check request parameters (AÑADIR MÁS CHECKEOS!!!)
  // if (!name || !password || !email || !address) {
  //   return res.status(400).json({ message: 'Please provide name, password, and email.' });
  // }

  res.send(await product.createCategory(productID, category));
});


// PUT requests
router.put('/categories/:id', async (req, res) => {
  const { category } = req.body;

  res.send(await product.updateCategoryById(req.params.id, category));
});


// DELETE requests
router.delete('/categories/:id', async (req, res) => {
  res.send(await product.deleteCategoryById(req.params.id));
});


module.exports = router;