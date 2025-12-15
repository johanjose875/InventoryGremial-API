import "dotenv/config";
import sql from "mssql";

const config: sql.config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER || "localhost",
  database: process.env.DB_DATABASE,
  options: {
    encrypt: (process.env.DB_ENCRYPT || "false") === "true",
    trustServerCertificate: (process.env.DB_TRUST_CERT || "true") === "true"
  }
};

export const pool = new sql.ConnectionPool(config);

export async function connectDB() {
  await pool.connect();
  console.log("✅ SQL Server conectado");
}
