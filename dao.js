const { Pool } = require('pg');
const Item = require('./vo'); // Value Object

const pool = new Pool({
    user: 'un5crkmm1qpme9gocm5m',
    host: 'bwo6ya4ml445rwn58lo2-postgresql.services.clever-cloud.com',
    database: 'bwo6ya4ml445rwn58lo2',
    password: 'LawBldiV0aK84bgsx7xq0oKwpSK8BT',
    port: 5432,
});

class ItemDAO {
    static async create(name, description) {
        const query = 'INSERT INTO items (name, description) VALUES ($1, $2) RETURNING *';
        const values = [name, description];
        try {
            const result = await pool.query(query, values);
            const newItem = result.rows[0];
            return new Item(newItem.id, newItem.name, newItem.description);
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        const query = 'SELECT * FROM items WHERE id = $1';
        const values = [id];
        try {
            const result = await pool.query(query, values);
            const itemData = result.rows[0];
            if (!itemData) return null;
            return new Item(itemData.id, itemData.name, itemData.description);
        } catch (error) {
            throw error;
        }
    }

    // Implement update and delete methods similarly
}

module.exports = ItemDAO;
