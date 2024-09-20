import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import repairRoutes from "./routes/repairRoutes.js";

dotenv.config();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/repairs", repairRoutes);

app.listen(port, () => console.log(`Server running on port: ${port}`));
