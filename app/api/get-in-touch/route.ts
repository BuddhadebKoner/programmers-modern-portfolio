import transporter from "@/config/nodemailer";
import { NextRequest, NextResponse } from "next/server";

// send mail
export const POST = async (request: NextRequest) => {
   try {
      const { name, email, message } = await request.json();
      const SENDER_EMAIL = process.env.SENDER_EMAIL;
      const MY_EMAIL = process.env.MY_EMAIL;

      if (!name || !email || !message) {
         return NextResponse.json(
            { error: "All fields are required" },
            { status: 400 }
         );
      }

      if (!SENDER_EMAIL || !MY_EMAIL) {
         console.error("Email configuration missing");
         return NextResponse.json(
            { error: "Server configuration error" },
            { status: 500 }
         );
      }

      // send notification to my email address
      const mailOptions = {
         from: SENDER_EMAIL,
         to: MY_EMAIL,
         subject: `New Contact Form Submission: ${name}`,
         html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
      };

      const sendingMail = await transporter.sendMail(mailOptions);
      if (!sendingMail) {
         return NextResponse.json(
            { error: "Failed to send notification email" },
            { status: 500 }
         );
      }

      // send confirmation to the customer
      const mailOptionsToCustomer = {
         from: SENDER_EMAIL,
         to: email,
         subject: `Thank you for contacting us, ${name}`,
         html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for contacting me. I have received your message and will get back to you as soon as possible.</p>
        <p>For your records, here is a copy of your message:</p>
        <p><em>${message}</em></p>
        <p>Best regards,</p>
        <p>Your Name</p>
      `
      };

      const sendingMailToCustomer = await transporter.sendMail(mailOptionsToCustomer);
      if (!sendingMailToCustomer) {
         // Even if confirmation email fails, we already sent the notification
         // So we can still return a success response but with a warning
         return NextResponse.json(
            {
               message: "Form received, but confirmation email could not be sent",
               warning: true
            },
            { status: 200 }
         );
      }

      return NextResponse.json(
         { message: "Email sent successfully" },
         { status: 200 }
      );
   } catch (error) {
      console.error("Contact form error:", error);
      return NextResponse.json(
         { error: "Internal Server Error" },
         { status: 500 }
      );
   }
};