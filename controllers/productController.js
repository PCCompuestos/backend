const db = require('../db');

const createProduct = async (name, description, quantity, price, url, image) => {
  try {
    const result = await db.query(`INSERT INTO Products(id, name, description, quantity, price, URL, image) VALUES(nextval('productSeq'), $1, $2, $3, $4, $5, $6) RETURNING *`, [name, description, quantity, price, url, image]);
    return result;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

const getAllProducts = async () => {
  try {
    const result = await db.query('SELECT * FROM Products');
    return result;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

const getProductById = async (productId) => {
  try {
    const result = await db.query('SELECT * FROM Products WHERE id = $1', [productId]);
    return result.rows[0];
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

const getProductByUrl = async (productUrl) => {
  try {
    const result = await db.query('SELECT * FROM Products WHERE url = $1', [productUrl]);
    // console.log(result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

const getProductComponentsById = async (productId) => {
  try {
    const result = await db.query('SELECT * FROM product_component WHERE productid = $1', [productId]);
    return result.rows;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

const updateProductById = async (productId, name, description, quantity, price, url, image) => {
  const result = await db.query('UPDATE Products SET name = $2, description = $3, quantity = $4, price = $5, url = $6, image = $7 WHERE id = $1 RETURNING *', [productId, name, description, quantity, price, url, image]);
  return result.rows[0];
}

const deleteProductById = async (productId) => {
  try {
    const result = await db.query('DELETE FROM Products WHERE id = $1 RETURNING *', [productId]);
    return result;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

const addComponentToProduct = async (productId, componentId) => {
  try {
    const result = await db.query(`INSERT INTO consists_of(componentid, productid) VALUES($1, $2) RETURNING *`, [productId, componentId]);
    return result;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

const deleteProductComponentsById = async (productId, componentId) => {
  try {
    const result = await db.query('DELETE FROM consists_of WHERE productid = $1 AND componentid = $2 RETURNING *', [productId, componentId]);
    return result;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

const search = async (cpu, ram, graphics, storage) => {
  try {
    const result = await db.query(`
      SELECT P.*
      FROM Products P
      WHERE P.ID IN (
        SELECT PC.productID 
        FROM product_component PC
        WHERE PC.componentName = '`+ cpu + `' AND PC.componentType = 'procesador'
      ) 
      AND P.ID IN (
        SELECT PC.productID 
        FROM product_component PC
        WHERE PC.componentName = '`+ ram + `' AND PC.componentType = 'ram'
      )
      AND P.ID IN (
        SELECT PC.productID 
        FROM product_component PC
        WHERE PC.componentName = '`+ graphics + `' AND PC.componentType = 'grafica'
      )
      AND P.ID IN (
        SELECT PC.productID 
        FROM product_component PC
        WHERE PC.componentName = '`+ storage + `' AND PC.componentType = 'disco_duro'
      )
    `);
    return result;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

// Other methods...

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  getProductByUrl,
  getProductComponentsById,
  updateProductById,
  deleteProductById,
  deleteProductComponentsById,
  addComponentToProduct,
  search
};
