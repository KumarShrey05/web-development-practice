import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Creates a MySQL connection pool using environment variables.
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

// Exports the pool for database queries.
export default pool;
