import nodemailer from "nodemailer";

const sendEmail = async (subject, text, replyTo) => {
  try {
    // 1️⃣ Create transporter
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2️⃣ Define email options
    const mailOptions = {
      from: `"Eco Bazaar" <${process.env.EMAIL_USER}>`,
      to: replyTo,          // recipient email
      replyTo,              // optional reply email
      subject,              // email subject
      text,                 // plain text body
    };

    // 3️⃣ Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully:", info.response);
    return info;
  } catch (error) {
    console.error("❌ Email sending failed:", error.message);
    throw new Error("Email sending failed: " + error.message);
  }
};

export default sendEmail;
