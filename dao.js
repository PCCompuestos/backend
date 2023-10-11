const { Pool } = require('pg');
const User = require('./vos/userVO'); // Value Object


class UserDAO {
  constructor() {
    // Configuración de la conexión
    this.pool = new Pool({
        user: 'un5crkmm1qpme9gocm5m',
        host: 'bwo6ya4ml445rwn58lo2-postgresql.services.clever-cloud.com',
        database: 'bwo6ya4ml445rwn58lo2',
        password: 'LawBldiV0aK84bgsx7xq0oKwpSK8BT',
        port: 5432,
    });

    // Cierra el pool de conexiones cuando la aplicación termina
    process.on('SIGINT', () => {
      this.pool.end(() => {
        console.log('Desconectado del servidor PostgreSQL');
        process.exit(0);
      });
    });
  }

  async getAllUsers() {
    try {
      const result = await this.pool.query('SELECT * FROM Users');
      return result.rows;
    } catch (error) {
      console.error('Error en la consulta', error);
      throw error;
    }
  }

  async getUserById(userId) {
    try {
      const result = await this.pool.query('SELECT * FROM Users WHERE id = $1', [userId]);
      return result.rows[0];
    } catch (error) {
      console.error('Error en la consulta', error);
      throw error;
    }
  }

  // Otros métodos según tus necesidades...
}

module.exports = UserDAO;
