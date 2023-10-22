const db = require('../db');

const createProduct = async (name, description, quantity, price) => {
  const result = await db.query(`INSERT INTO Products(id, name, description, quantity, price) VALUES(nextval('productSeq'), $1, $2, $3, $4) RETURNING *`, [name, description, quantity, price]);
  return result;
}

// Operación CRUD: Read_1
const getAllProducts = async () => {
  try {
    const result = await db.query('SELECT * FROM Products');
    return result;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

// Operación CRUD: Read_2
const getProductById = async (productId) => {
  try {
    const result = await db.query('SELECT * FROM Products WHERE id = $1', [productId]);
    return result.rows[0];
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

// Operación CRUD: Update
const updateProductById = async (productId, name, description, quantity, price) => {
  const result = await db.query('UPDATE Products SET name = $2, description = $3, quantity = $4, price = $5 WHERE id = $1 RETURNING *', [productId, name, description, quantity, price]);
  return result.rows[0];
}


// Operación CRUD: Delete
const deleteProductById = async (productId) => {
  const result = await db.query('DELETE FROM Products WHERE id = $1 RETURNING *', [productId]);
  return result;
}

// Other methods...

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById
};
