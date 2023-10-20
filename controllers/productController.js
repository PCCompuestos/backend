// Definición de operaciones CRUD (Create, Read, Update, Delete)

class Product {
    constructor(pool) {
      this.pool = pool;
    }
  
    async createProduct(product) {
        const result = await this.pool.query('INSERT INTO Products(name, description, price, stock, image) VALUES($1, $2, $3, $4, $5) RETURNING *', [product.name, product.description, product.price, product.stock, product.image]);
        return result.rows[0];
    }

    async getAllProducts() {
        try{
            const result = await this.pool.query('SELECT * FROM Products');
            return result.rows;
        }
        catch(error){
            console.error('Error en la consulta', error);
            throw error;
        }
    }

    async getProductById(productId) {
        try{
            const result = await this.pool.query('SELECT * FROM Products WHERE id = $1', [productId]);
            return result.rows[0];
        }
        catch(error){
            console.error('Error en la consulta', error);
            throw error;
        }
    }

    async updateProduct(product) {
        const result = await this.pool.query('UPDATE Products SET name = $1, description = $2, price = $3, stock = $4, image = $5 WHERE id = $6 RETURNING *', [product.name, product.description, product.price, product.stock, product.image, product.id]);
        return result.rows[0];
    }


    async deleteProduct(productId) {
        const result = await this.pool.query('DELETE FROM Products WHERE id = $1 RETURNING *', [productId]);
        return result.rows[0];
    }  
        
    // Otros métodos según nusetras necesidades...
}
  
module.exports = Product;
  