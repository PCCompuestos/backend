const express = require('express');
const router = express.Router();
const product = require('../controllers/componentController');

router.use(express.json());

// GET requests
router.get('/components', async (req, res) => {
  res.send((await product.getAllComponents()).rows);
});

router.get('/components/:id', async (req, res) => {
  res.send(await product.getComponentById(req.params.id));
});


// POST requests
router.post('/components', async (req, res) => {
  const { brand, model, description, quantity, price } = req.body;

  // Check request parameters (AÑADIR MÁS CHECKEOS!!!)
  // if (!name || !password || !email || !address) {
  //   return res.status(400).json({ message: 'Please provide name, password, and email.' });
  // }
  //try {
    res.send(await product.createComponent(brand, model, description, quantity, price));
  /*} catch (error) {
    console.error('Error:', error.message);
  }*/
});


// PUT requests
router.put('/components/:id', async (req, res) => {
  const { brand, model, description, quantity, price } = req.body;

  res.send(await product.updateComponentById(req.params.id, brand, model, description, quantity, price));
});


// DELETE requests
router.delete('/components/:id', async (req, res) => {
  res.send(await product.deleteComponentById(req.params.id));
});


module.exports = router;