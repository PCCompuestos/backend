const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcrypt');
const db = require('../db');

const saltRounds = 10;

const createUser = async (name, password, isAdmin, email, address) => {
  bcrypt.hash(password, saltRounds, async (err, hash) => {
    if (err) {
      return err;
    } else {
      return await db.query(`INSERT INTO Users(id, name, password, isAdmin, email, address) VALUES(nextval('userSeq'), $1, $2, $3, $4, $5) RETURNING *`, [name, hash, isAdmin, email, address]);
    }
  });
}

const getAllUsers = async () => {
  try {
    const result = await db.query('SELECT * FROM Users');
    return result;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

const getUserById = async (userId) => {
  try {
    const result = await db.query('SELECT * FROM Users WHERE id = $1', [userId]);
    return result.rows[0];
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

const getUserByEmail = async (userEmail) => {
  try {
    const result = await db.query('SELECT * FROM Users WHERE email = $1', [userEmail]);
    return result.rows[0];
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

const updateUserById = async (userId, name, password, email, address) => {
  const result = await db.query('UPDATE Users SET name = $2, password = $3, email = $4, address = $5 WHERE id = $1 RETURNING *', [userId, name, password, email, address]);
  return result.rows[0];
}

const deleteUserById = async (userId) => {
  const result = await db.query('DELETE FROM Users WHERE id = $1 RETURNING *', [userId]);
  return result;
}

const login = async (email, enteredPassword) => {
  try {
    const { id, password: storedPassword } = await getUserByEmail(email);
    const result = await new Promise((resolve, reject) => {
      bcrypt.compare(enteredPassword, storedPassword, (err, result) => {
        if (err) {
          reject(err);
        } else if (result) {
          const token = jwt.sign({ id: id }, 'SECRET_KEY', { expiresIn: '1h' });
          resolve(token);
        } else {
          resolve('incorrect email or password');
        }
      });
    });
    return result;
  } catch (error) {
    throw error;
  }
}

// Other methods...

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
  login
};
