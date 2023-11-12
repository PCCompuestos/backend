const express = require('express');
const router = express.Router();
const order = require('../controllers/orderController');

router.use(express.json());

// GET requests
router.get('/orders', async (req, res) => {
  res.send((await order.getAllOrders()).rows);
});

router.get('/orders/:id', async (req, res) => {
  res.send(await order.getOrderById(req.params.id));
});


// POST requests
router.post('/orders', async (req, res) => {
  const { id, quantity, purchaseDate, purchaseTime } = req.body;

  // Check request parameters (AÑADIR MÁS CHECKEOS!!!)
  // if (!name || !password || !email || !address) {
  //   return res.status(400).json({ message: 'Please provide name, password, and email.' });
  // }

  res.send(await order.createOrder(id, quantity, purchaseDate, purchaseTime));
});

// PUT requests
router.put('/orders/:id', async (req, res) => {
  const { userID, quantity, purchaseDate, purchaseTime } = req.body;

  res.send(await order.updateOrderById(req.params.id, userID, quantity, purchaseDate, purchaseTime));
});

router.put('/orders/:id/setStatus', async (req, res) => {
  const { id, status} = req.body;

  res.send(await order.updateOrderStatusById(id, status));
});


// DELETE requests
router.delete('/orders/:id', async (req, res) => {
  res.send(await order.deleteOrderById(req.params.id));
});


module.exports = router;