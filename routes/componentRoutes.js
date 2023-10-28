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
  const { name, description, quantity, price } = req.body;

  // Check request parameters (AÑADIR MÁS CHECKEOS!!!)
  // if (!name || !password || !email || !address) {
  //   return res.status(400).json({ message: 'Please provide name, password, and email.' });
  // }

  res.send(await product.createComponent(name, description, quantity, price));
});


// PUT requests
router.put('/components/:id', async (req, res) => {
  const { name, description, quantity, price } = req.body;

  res.send(await product.updateComponentById(req.params.id, name, description, quantity, price));
});


// DELETE requests
router.delete('/components/:id', async (req, res) => {
  res.send(await product.deleteComponentById(req.params.id));
});


module.exports = router;