const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');

router.use(express.json());

router.get('/users', async (req, res) => {
  res.send((await user.getAllUsers()).rows);
});

router.get('/users/:id', async (req, res) => {
  res.send(await user.getUserById([req.params.id]));
});

router.post('/users', async (req, res) => {
  const { name, password, isAdmin, email, address } = req.body;

  // Check request parameters (Añadir más checkeos)
  if (!name || !password || !isAdmin || !email || !address) {
    return res.status(400).json({ message: 'Please provide name, password, and email.' });
  }
  
  // Insert user
  res.send(await user.createUser(name, password, isAdmin, email, address));
});

module.exports = router;
