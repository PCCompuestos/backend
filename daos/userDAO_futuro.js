const { Client } = require('pg');
const Item = require('./vos/user'); // Value Object

const client = new Client({
    user: 'un5crkmm1qpme9gocm5m',
    host: 'bwo6ya4ml445rwn58lo2-postgresql.services.clever-cloud.com',
    database: 'bwo6ya4ml445rwn58lo2',
    password: 'LawBldiV0aK84bgsx7xq0oKwpSK8BT',
    port: 5432,
});


class UserDAO {
  constructor(connectionOptions) {
    this.client = new Client(connectionOptions);

    this.client.connect()
      .then(() => {
        console.log('Connected to the database');
        this.createTable();
      })
      .catch(err => console.error('Error connecting to the database', err));
  }

  createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS "User" (
        ID SERIAL PRIMARY KEY,
        name TEXT,
        password TEXT,
        isAdmin BOOLEAN,
        email TEXT,
        address TEXT
      )
    `;

    this.client.query(sql)
      .then(() => console.log('Table created'))
      .catch(err => console.error('Error creating table', err));
  }

  addUser(user) {
    const sql = `
      INSERT INTO "User" (name, password, isAdmin, email, address)
      VALUES ($1, $2, $3, $4, $5)
    `;

    // En lugar de usar user.name, utilizar un getter getName() del VO
    const values = [user.name, user.password, user.isAdmin, user.email, user.address];

    this.client.query(sql, values)
      .then(() => console.log('User added to the database'))
      .catch(err => console.error('Error adding user', err));
  }

  getUserById(ID, callback) {
    const sql = 'SELECT * FROM "User" WHERE ID = $1';

    this.client.query(sql, [ID])
      .then(result => callback(result.rows[0]))
      .catch(err => console.error('Error getting user by ID', err));
  }

  // Otros métodos según lo que necesitemos...

  closeConnection() {
    this.client.end()
      .then(() => console.log('Closed the database connection'))
      .catch(err => console.error('Error closing connection', err));
  }
}

module.exports = UserDAO;