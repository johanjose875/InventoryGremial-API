import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./db";

const app = express();

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (_req, res) => {
  res.json({ message: "API Inventory Gremial funcionando 🚀" });
});

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 API corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error conectando a la DB", err);
  });
