const db = require('../db');

const createOrder = async (userID, quantity, purchaseDate, purchaseTime) => {
  try{
    const result = await db.query(`INSERT INTO Orders(ID, userID, quantity, purchaseDate, purchaseTime) VALUES(nextval('OrderSeq'), $1, $2, $3, $4) RETURNING *`, [userID, quantity, purchaseDate, purchaseTime]);
    return result;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

// Operación CRUD: Read_1
const getAllOrders = async () => {
  try {
    const result = await db.query('SELECT * FROM Orders');
    return result;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

// Operación CRUD: Read_2
// const getOrderById = async (orderId) => {
//   try {
//     const result = await db.query('SELECT * FROM Orders WHERE id = $1', [orderId]);
//     return result.rows[0];
//   } catch (error) {
//     console.error('Fatal error: ', error);
//     throw error;
//   }
// }

// Operación CRUD: Read_3
const getOrderByUserId = async (userId) => {
  try {
    const result = await db.query('SELECT * FROM Orders WHERE userID = $1', [userId]);
    return result;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

// Operación CRUD: Update
const updateOrderById = async (ID, userID, quantity, purchaseDate, purchaseTime) => {
  try{
    const result = await db.query('UPDATE Orders SET userID = $2, quantity = $3, purchaseDate = $4, purchaseTime = $5 WHERE id = $1 RETURNING *', [ID, userID, quantity, purchaseDate, purchaseTime]);
    return result.rows[0];
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

const updateOrderStatusById = async (id, status) => {
  try{
    const result = await db.query('UPDATE Orders SET status = $2 WHERE id = $1 RETURNING *', [id, status]);
    return result.rows[0];
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

// Operación CRUD: Delete
const deleteOrderById = async (orderId) => {
  try{
    const result = await db.query('DELETE FROM Orders WHERE id = $1 RETURNING *', [orderId]);
    return result;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

// Other methods...

module.exports = {
  createOrder,
  getAllOrders,
  // getOrderById,
  getOrderByUserId,
  updateOrderById,
  updateOrderStatusById,
  deleteOrderById
};
