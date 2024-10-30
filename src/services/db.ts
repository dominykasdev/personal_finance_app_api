import mysql from "mysql2/promise";
import { ConnectionOptions } from "mysql2/typings/mysql/lib/Connection";
import "dotenv";

const config: ConnectionOptions = {
  host: process.env.DB_SERVER,
  port: parseInt(process.env.DB_PORT as string),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

async function query(sql: string, params?: any) {
  const connection = await mysql.createConnection(config);
  const queryResults = await connection.execute(sql, params);

  return queryResults;
}

export default { query };
