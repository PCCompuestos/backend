const express = require('express');
const user = require('../controllers/userController');
const { verifyToken } = require('../auth');

const router = express.Router();
router.use(express.json());

router.post('/users/login', async (req, res) => {
  const { email, password } = req.body;
  res.send(await user.login(email, password));
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

// From here the request must have a valid token
// router.use(verifyToken);

router.get('/users', async (req, res) => {
  res.send((await user.getAllUsers()).rows);
});

router.get('/users/:id', async (req, res) => {
  res.send(await user.getUserById(req.params.id));
});

// router.put('/users/:id', async (req, res) => {
//   const { name } = req.body;
//   console.log(name);
//   res.send(await user.updateUsernameById(req.params.id, name));
// });

router.put('/users/:id/setName', async (req, res) => {
  const { name } = req.body;

  res.send(await user.updateUserByUsername(req.params.id, name));
});

router.put('/users/:id/setPassword', async (req, res) => {
  const { password } = req.body;

  res.send(await user.updateUserPassword(req.params.id, password));
});

router.put('/users/:id/setAdmin', async (req, res) => {
  res.send(await user.updateUserAdmin(req.params.id));
});


router.delete('/users/:id', async (req, res) => {
  res.send(await user.deleteUserById(req.params.id));
});

module.exports = router;
