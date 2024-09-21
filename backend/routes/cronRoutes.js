import express from "express";
// import Repair from "../models/repair.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // or 'gmail', depending on your service
    auth: {
      user: process.env.ADMIN_EMAIL, // Replace with your email
      pass: process.env.ADMIN_EMAIL_PASSWORD, // Replace with your email password
    },
  });

  try {
    // Add logic to check expired repairs here
    const isExpired = true; // Example condition for expired repairs

    if (isExpired) {
      await transporter.sendMail({
        from: process.env.ADMIN_EMAIL,
        to: process.env.ADMIN_EMAIL, // Admin email
        subject: "Repair Expired",
        text: "A repair has expired!",
      });
      console.log("Email sent");
      res.status(200).json({ success: true });
    } else {
      res.status(200).json({ message: "No expired repairs found" });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
