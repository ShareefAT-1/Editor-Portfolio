import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Editor Portfolio API Running...");
});

app.use("/api/projects", projectRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});