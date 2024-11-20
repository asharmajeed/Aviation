import express from "express";
import Repair from "../models/repair.js";
import moment from "moment";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("running");
  console.log("Environment Variables:", {
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_EMAIL_PASSWORD: process.env.ADMIN_EMAIL_PASSWORD ? "Set" : "Not Set",
  });
  const transporter = nodemailer.createTransport({
    service: "gmail", // or 'gmail', depending on your service
    auth: {
      user: process.env.ADMIN_EMAIL, // Replace with your email
      pass: process.env.ADMIN_EMAIL_PASSWORD, // Replace with your email password
    },
  });

  const sendExpiryMailToAdmin = async (repair, isReminder = false) => {
    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: isReminder
        ? `Reminder: Repair Expiring Soon for ${repair.componentType}`
        : `Repair Expired for ${repair.componentType}`,
      text: isReminder
        ? `The repair for component "${repair.componentType}" by "${
            repair.username
          }" will expire on ${moment(repair.expireDate).format(
            "ddd MMM DD YYYY"
          )}. Please take action soon.`
        : `The repair for component "${repair.componentType}" by "${
            repair.username
          }" has expired on ${moment(repair.expireDate).format(
            "ddd MMM DD YYYY"
          )}. Please take the necessary action.`,
    };
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(
        isReminder
          ? `Reminder Email sent: ${info.response}`
          : `Expired Email sent: ${info.response}`
      );
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  

  try {
    console.log("Checking for expired and expiring repairs...");

    const currentDate = moment().format("YYYY-MM-DD");
    const oneDayBefore = moment().subtract(1, "days").format("YYYY-MM-DD"); // Subtract 1 day from the current date

    // Fetch repairs that have expired today
    const expiredRepairs = await Repair.find({ expireDate: currentDate });
    console.log("Expired Repairs:", expiredRepairs);

    // Fetch repairs that expired 1 day before
    const expiringRepairs = await Repair.find({ expireDate: oneDayBefore });
    console.log("Expiring Repairs:", expiringRepairs);

    // Send an email for each expired repair
    expiredRepairs.forEach((repair) => {
      sendExpiryMailToAdmin(repair);
    });

    // Send a reminder email for repairs that will expire soon
    expiringRepairs.forEach((repair) => {
      sendExpiryMailToAdmin(repair, true); // 'true' indicates it's a reminder
    });

    res.status(200).json({
      message: "Emails sent for expired and expiring repairs",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
