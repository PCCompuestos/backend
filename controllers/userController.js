const db = require('../db');

// Operación CRUD: Create
/*const createUser = async (user) => {
  const result = await db.query('INSERT INTO Users(name, password, isAdmin, email, address) VALUES($1, $2, $3, $4, $5) RETURNING *', [user.name, user.password, user.isAdmin, user.email, user.address]);
  return result.rows[0];
}*/

// Operación CRUD: Read_1
const getAllUsers = async () => {
  try {
    const result = await db.query('SELECT * FROM Users');
    return result;
  } catch (error) {
    console.error('Error en la consulta', error);
    throw error;
  }
}

// Operación CRUD: Read_2
/*async getUserById(userId) {
  try {
    const result = await query('SELECT * FROM Users WHERE id = $1', [userId]);
    return result.rows[0];
  } catch (error) {
    console.error('Error en la consulta', error);
    throw error;
  }
}

// Operación CRUD: Update
async updateUser(user) {
  const result = await query('UPDATE Users SET name = $1, password = $2, isAdmin = $3, email = $4, address = $5 WHERE id = $6 RETURNING *', [user.name, user.password, user.isAdmin, user.email, user.address, user.id]);
  return result.rows[0];
}

// Operación CRUD: Delete
async deleteUser(userId) {
  const result = await query('DELETE FROM Users WHERE id = $1 RETURNING *', [userId]);
  return result.rows[0];
}*/

// Otros métodos según nusetras necesidades...

module.exports = {
  getAllUsers
};
