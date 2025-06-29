import { NextResponse } from "next/server"
// In a real application, you would use a library like nodemailer
// import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    /*
    // --- Real Nodemailer logic would go here ---
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: message,
      html: `<p>You have a new contact form submission:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);
    */

    // Simulate a delay for the email sending process
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
  }
}
