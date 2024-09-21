import express from "express";
import Repair from "../models/repair.js";
import moment from "moment";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("running");
  const transporter = nodemailer.createTransport({
    service: "gmail", // or 'gmail', depending on your service
    auth: {
      user: process.env.ADMIN_EMAIL, // Replace with your email
      pass: process.env.ADMIN_EMAIL_PASSWORD, // Replace with your email password
    },
  });

  const sendExpiryMailToAdmin = (repair) => {
    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL, // Always send to admin
      subject: `Repair Expired for ${repair.componentType}`,
      text: `The repair for component "${repair.componentType}" by "${
        repair.username
      }" has expired on ${moment(repair.expireDate).format(
        "ddd MMM DD YYYY"
      )}. Please take the necessary action.`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  };

  try {
    console.log("Checking for expired repairs...");

    const currentDate = moment().format("YYYY-MM-DD");

    const expiredRepairs = await Repair.find({ expireDate: currentDate });
    console.log("Expired Repairs:", expiredRepairs);

    // Send an email for each expired repair
    expiredRepairs.forEach((repair) => {
      sendExpiryMailToAdmin(repair);
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
