import nodemailer from 'nodemailer';
import cron from 'node-cron';
import moment from 'moment';
import Repair from '../models/repair.js'

// Set up nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_EMAIL_PASSWORD,
  },
});

// Function to send expiry notification to the admin
const sendExpiryMailToAdmin = (repair) => {
  const mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: process.env.ADMIN_EMAIL, // Always send to admin
    subject: `Repair Expired for ${repair.componentType}`,
    text: `The repair for component "${repair.componentType}" by "${repair.username}" has expired on ${repair.expireDate}. Please take the necessary action.`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

// Schedule a cron job to run every day at midnight
cron.schedule('0 0 * * *', async () => {
  console.log('Checking for expired repairs...');

  const currentDate = moment().format('YYYY-MM-DD');

  try {
    // Fetch repairs with an expireDate equal to the current date
    const expiredRepairs = await Repair.find({ expireDate: currentDate });

    // Send an email for each expired repair
    expiredRepairs.forEach((repair) => {
      sendExpiryMailToAdmin(repair);
    });
  } catch (error) {
    console.log('Error checking expired repairs:', error);
  }
});