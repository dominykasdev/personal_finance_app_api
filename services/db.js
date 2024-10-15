const mysql = require("mysql2/promise");

const config = {
  host: process.env.DB_SERVER,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

async function query(sql, params) {
  const connection = await mysql.createConnection(config);
  const [results] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query,
};
