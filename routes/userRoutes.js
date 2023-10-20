const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');

router.use(express.json());

router.get('/users', async (req, res) => {
  res.send((await user.getAllUsers()).rows);
});

router.get('/user/:id', async (req, res) => {
  res.send(user.getUserById([req.params.id]));
});

module.exports = router;
