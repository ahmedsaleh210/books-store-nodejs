import dotenv from "dotenv";
import pkg from "pg";
const { Pool } = pkg;

dotenv.config();

const dbConfig = {
  connectionString: process.env.DATABASE_URL,
  connectionTimeoutMillis: 300000,
  idleTimeoutMillis: 300000,
  max: 20,
};

const pool = new Pool(dbConfig);

pool.on("connect", () => {
  console.log("Database is connected successfully");
});

pool.on("remove", () => {
  console.log("Database connection is removed");
});

export default pool;
