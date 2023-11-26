const db = require('../db');

const createComponent = async (brand, model, description, quantity, price) => {
  try{
    const result = await db.query(`INSERT INTO Component(id, brand, model, description, quantity, price, discount, numbersales, type) VALUES(nextval('componentSeq'), $1, $2, $3, $4, $5, 0, 0, 'procesador') RETURNING *`, [brand, model, description, quantity, price]);
    return result;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

// Operación CRUD: Read_1
const getAllComponents = async () => {
  try {
    const result = await db.query('SELECT * FROM Component ORDER BY id ASC');
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
const updateComponentById = async (id, brand, model, description, quantity, price) => {
  try{
    const result = await db.query('UPDATE Component SET brand = $2, model = $3, description = $4, quantity = $5, price = $6 WHERE id = $1 RETURNING *', [id, brand, model, description, quantity, price]);
    return result.rows[0];   
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}


// Operación CRUD: Delete
const deleteComponentById = async (id) => {
  try{
    const result = await db.query('DELETE FROM Component WHERE id = $1 RETURNING *', [id]);
    return result;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

// Other methods...

module.exports = {
  createComponent,
  getAllComponents,
  getComponentById,
  updateComponentById,
  deleteComponentById
};
