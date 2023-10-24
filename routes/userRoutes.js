const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');

router.use(express.json());

// GET requests
router.get('/users', async (req, res) => {
  res.send((await user.getAllUsers()).rows);
});

router.get('/users/:id', async (req, res) => {
  res.send(await user.getUserById(req.params.id));
});


// POST requests
router.post('/users', async (req, res) => {
  /*const { name, password, email, address } = req.body;

  // Check request parameters (AÑADIR MÁS CHECKEOS!!!)
  if (!name || !password || !email || !address) {
    return res.status(400).json({ message: 'Please provide name, password, and email.' });
  }

  res.send(await user.createUser(name, password, false, email, address));*/
  res.send('Hola');
});


// PUT requests
router.put('/users/:id', async (req, res) => {
  const { name, password, email, address } = req.body;

  res.send(await user.updateUserById(req.params.id, name, password, email, address));
});


// DELETE requests
router.delete('/users/:id', async (req, res) => {
  res.send(await user.deleteUserById(req.params.id));
});


module.exports = router;
