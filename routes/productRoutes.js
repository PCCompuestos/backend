const query = require('../db');
const express = require('express');
const router = express.Router();

router.get('/products', async (req, res) => {
  const result = await query('SELECT * FROM Products')
  res.send(result.rows)
});

router.get('/product/:id', async (req, res) => {
  const result = await query('SELECT * FROM Products WHERE id = $1', [req.params.id])
  res.send(result.rows[0])
});

module.exports = router;