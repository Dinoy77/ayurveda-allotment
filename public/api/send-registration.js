import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Invalid request method.' });
  }

  const { name, email, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ success: false, message: 'Name and phone number are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net', // GoDaddy SMTP server
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Ayurveda Allotment Website" <${process.env.EMAIL_USER}>`,
      to: 'enquiry@yourdomain.com', // change this to where you want to receive registrations
      replyTo: email || process.env.EMAIL_USER,
      subject: `New Registration - ${name}`,
      text: `
New registration from the Ayurveda Allotment website

Name:  ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}

Submitted At: ${new Date().toLocaleString('en-IN')}
      `,
    });

    return res.status(200).json({ success: true, message: 'Registration sent successfully.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: 'Failed to send registration. Please try again later.' });
  }
}