const express = require('express');
const ItemDAO = require('./dao');

const app = express();
const port = 3001;

app.use(express.json());

app.post('/items', async (req, res) => {
    const { name, description } = req.body;
    try {
        const newItem = await ItemDAO.create(name, description);
        res.json(newItem);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create item.' });
    }
});

app.get('/items/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const item = await ItemDAO.getById(id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ error: 'Item not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch item.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
