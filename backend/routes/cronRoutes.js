import express from "express";
// import Repair from "../models/repair.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // Return a simple response for testing
    res.status(200).json({ message: "Cron job executed successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});


export default router;
