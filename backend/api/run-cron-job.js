// /api/run-cron-job.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Cron job triggered');

    // Example: send email if condition met
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or 'gmail', depending on your service
      auth: {
        user: process.env.ADMIN_EMAIL,         // Replace with your email
        pass: process.env.ADMIN_EMAIL_PASSWORD // Replace with your email password
      },
    });

    try {
      // Add logic to check expired repairs here
      const isExpired = true; // Example condition for expired repairs

      if (isExpired) {
        await transporter.sendMail({
          from: process.env.ADMIN_EMAIL,
          to: process.env.ADMIN_EMAIL, // Admin email
          subject: 'Repair Expired',
          text: 'A repair has expired!',
        });
        console.log('Email sent');
        res.status(200).json({ success: true });
      } else {
        res.status(200).json({ message: 'No expired repairs found' });
      }

    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
