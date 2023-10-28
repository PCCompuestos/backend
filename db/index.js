const { Pool } = require('pg');
 
const pool = new Pool({
    user: 'un5crkmm1qpme9gocm5m',
    host: 'blgkzo2j8cpkvlou2dav-postgresql.services.clever-cloud.com',
    database: 'blgkzo2j8cpkvlou2dav',
    password: 'LawBldiV0aK84bgsx7xq0oKwpSK8BT',
    port: 50013,
});

const query = async (text, params) => {
  const start = Date.now()
  const res = await pool.query(text, params)
  const duration = Date.now() - start
  console.log('executed query', { text, duration, rows: res.rowCount })
  return res
}

module.exports = {
  query
}