const db = require('../db');

const createComponent = async (name, quantity, price) => {
  const result = await db.query(`INSERT INTO Component(code, name, quantity, price) VALUES(nextval('componentSeq'), $1, $2, $3) RETURNING *`, [name, quantity, price]);
  return result;
}

// Operación CRUD: Read_1
const getAllComponents = async () => {
  try {
    const result = await db.query('SELECT * FROM Component');
    return result;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

// Operación CRUD: Read_2
const getComponentById = async (code) => {
  try {
    const result = await db.query('SELECT * FROM Component WHERE code = $1', [code]);
    return result.rows[0];
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

// Operación CRUD: Update
const updateComponentById = async (code, name, quantity, price) => {
  const result = await db.query('UPDATE Component SET code = $2, name = $3, quantity = $4, price = $5 WHERE code = $1 RETURNING *', [code, name, quantity, price]);
  return result.rows[0];
}


// Operación CRUD: Delete
const deleteComponentById = async (code) => {
  const result = await db.query('DELETE FROM Component WHERE code = $1 RETURNING *', [code]);
  return result;
}

// Other methods...

module.exports = {
  createComponent,
  getAllComponents,
  getComponentById,
  updateComponentById,
  deleteComponentById
};
