import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
   host: process.env.SMTP_HOSTNAME,
   port: Number(process.env.SMTP_PORT),
   secure: false,
   auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD
   },
   // Add this for better error handling
   tls: {
      rejectUnauthorized: false // Useful in development
   }
});

// Verify the connection configuration
transporter.verify(function (error, success) {
   if (error) {
      console.error("SMTP connection error:", error);
   } else {
      console.log("SMTP server is ready to take our messages");
   }
});

export default transporter;