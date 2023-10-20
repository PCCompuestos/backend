const express = require('express');
const app = express();
const port = 3001;

const users = require('./routes/userRoutes');

app.use('/', users);

// Cierra el pool de conexiones cuando la aplicación termina
/*process.on('SIGINT', () => {
  pool.end(() => {
    console.log('Desconectado del servidor PostgreSQL');
    process.exit(0);
  });
});

const userDAO = new UserDAO(pool);


app.use(express.json());

app.get('/', async (req, res) => {
    try {
      const users = await userDAO.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).send('Error interno del servidor');
    }
});


app.get('/user/:id', async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await userDAO.getUserById(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).send('Usuario no encontrado');
      }
    } catch (error) {
      res.status(500).send('Error interno del servidor');
    }
});*/
  

// app.post('/items', async (req, res) => {
//     const { name, description } = req.body;
//     try {
//         const newItem = await ItemDAO.create(name, description);
//         res.json(newItem);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to create item.' });
//     }
// });

// app.get('/items/:id', async (req, res) => {
//     const id = parseInt(req.params.id);
//     try {
//         const item = await ItemDAO.getById(id);
//         if (item) {
//             res.json(item);
//         } else {
//             res.status(404).json({ error: 'Item not found.' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch item.' });
//     }
// });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
