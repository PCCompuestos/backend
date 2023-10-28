const db = require('../db');

const createCategory = async (productID, category) => {
  const result = await db.query(`INSERT INTO Category(productID, category) VALUES($1, $2) RETURNING *`, [productID, category]);
  return result;
}

// Operación CRUD: Read_1
const getAllCategories = async () => {
  try {
    const result = await db.query('SELECT * FROM Category');
    return result;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

// Operación CRUD: Read_2
// const getOrderById = async (orderId) => {
//   try {
//     const result = await db.query('SELECT * FROM Category WHERE id = $1', [orderId]);
//     return result.rows[0];
//   } catch (error) {
//     console.error('Fatal error: ', error);
//     throw error;
//   }
// }

// Operación CRUD: Update
const updateCategoryById = async (productID, category) => {
  const result = await db.query('UPDATE Category SET category = $2 WHERE productID = $1 RETURNING *', [productID, category]);
  return result.rows[0];
}


// Operación CRUD: Delete
const deleteCategoryById = async (productID) => {
  const result = await db.query('DELETE FROM Category WHERE productID = $1 RETURNING *', [productID]);
  return result;
}

// Other methods...

module.exports = {
  createCategories,
  getAllCategory,
  // getCategoryById,
  updateCategoryById,
  deleteCategoryById
};
