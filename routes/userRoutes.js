const jwt = require('jsonwebtoken'); 
const express = require('express');
const user = require('../controllers/userController');

const router = express.Router();

router.use(express.json());

router.get('/users', async (req, res) => {
  res.send((await user.getAllUsers()).rows);
});

router.get('/users/:id', async (req, res) => {
  res.send(await user.getUserById(req.params.id));
});

router.post('/users', async (req, res) => {
  const { name, password, email, address } = req.body;

  // Check request parameters (AÑADIR MÁS CHECKEOS!!!)
  if (!name || !password || !email) {
    return res.status(400).json({ message: 'Please provide name, password, and email.' });
  }
  let existingEmail = await user.getUserByEmail(email);
  if (existingEmail != null) { // If existing email is not null, there is a user with that email
    return res.status(400).json({ message: 'There is another user with the same email.' });
  }

  res.send(await user.createUser(name, password, false, email, address));
});

router.put('/users/:id', async (req, res) => {
  const { name, password, email, address } = req.body;

  res.send(await user.updateUserById(req.params.id, name, password, email, address));
});

router.delete('/users/:id', async (req, res) => {
  res.send(await user.deleteUserById(req.params.id));
});

router.delete('/users/login', async (req, res) => {
  const { email, password } = req.body;
  const token = jwt.sign({email: email, password: password}, 'SECRET_KEY');
  res.send(token);
  //res.send(await user.login(req.params.id));
});


module.exports = router;
