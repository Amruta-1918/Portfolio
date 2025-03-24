import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: 'cyberclub1815@gmail.com',
        pass: process.env.EMAIL_PASSWORD // your regular Gmail password
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email content
    const mailOptions = {
      from: 'cyberclub1815@gmail.com',
      to: 'cyberclub1815@gmail.com',
      subject: `New Portfolio Contact Form Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #6366f1;">New Contact Form Submission</h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ 
      error: 'Failed to send email. Please try contacting directly at cyberclub1815@gmail.com' 
    }, { status: 500 });
  }
} 