import nodemailer from 'nodemailer';
import { IncomingForm } from 'formidable';

// Disable Next.js default body parser so formidable can handle the raw stream
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Invalid request method.' });
  }

  try {
    // Parse the incoming form data
    const data = await new Promise((resolve, reject) => {
      const form = new IncomingForm({ keepExtensions: true });
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

    const { fields, files } = data;

    // Formidable often parses fields and files as arrays. This helper extracts the single value.
    const getVal = (val) => (Array.isArray(val) ? val[0] : val) || 'N/A';
    const getFile = (fileArr) => (Array.isArray(fileArr) ? fileArr[0] : fileArr);

    const firstName = getVal(fields.firstName);
    const lastName = getVal(fields.lastName);
    const email = getVal(fields.email);
    const phone = getVal(fields.phone);
    const course = getVal(fields.course);

    if (firstName === 'N/A' || phone === 'N/A') {
      return res.status(400).json({ success: false, message: 'Name and phone number are required.' });
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net', // GoDaddy SMTP server
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare attachments array
    const attachments = [];
    const fileKeys = ['photo', 'signature', 'tenthMarksCard', 'twelfthMarksCard'];
    
    fileKeys.forEach((key) => {
      const file = getFile(files[key]);
      if (file) {
        attachments.push({
          filename: file.originalFilename || `${key}.pdf`,
          path: file.filepath,
        });
      }
    });

    // Format the email body
    const emailHtml = `
      <h2>New Student Registration: ${firstName} ${lastName}</h2>
      <p><strong>Submitted At:</strong> ${new Date().toLocaleString('en-IN')}</p>
      
      <h3>Personal Details</h3>
      <ul>
        <li><strong>Name:</strong> ${firstName} ${lastName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Alternate Phone:</strong> ${getVal(fields.alternatePhone)}</li>
        <li><strong>Date of Birth:</strong> ${getVal(fields.dob)}</li>
        <li><strong>Course:</strong> ${course}</li>
        <li><strong>Address:</strong> ${getVal(fields.address)}, ${getVal(fields.district)}, ${getVal(fields.state)} - ${getVal(fields.pincode)}</li>
      </ul>

      <h3>Academic Details</h3>
      <ul>
        <li><strong>10th Percentage:</strong> ${getVal(fields.tenthPercentage)}%</li>
        <li><strong>12th Percentage:</strong> ${getVal(fields.twelfthPercentage)}%</li>
        <li><strong>Subject Stream:</strong> ${getVal(fields.subjectStream)}</li>
        <li><strong>Subject 1 (${getVal(fields.subject1)}):</strong> ${getVal(fields.subject1Marks)}/100</li>
        <li><strong>Subject 2 (${getVal(fields.subject2)}):</strong> ${getVal(fields.subject2Marks)}/100</li>
        <li><strong>Subject 3 (${getVal(fields.subject3)}):</strong> ${getVal(fields.subject3Marks)}/100</li>
      </ul>

      <h3>Parent / Guardian Details</h3>
      <ul>
        <li><strong>Father's Name:</strong> ${getVal(fields.fatherName)}</li>
        <li><strong>Father's Occupation:</strong> ${getVal(fields.fatherOccupation)} (Salary: ${getVal(fields.fatherSalary)})</li>
        <li><strong>Father's Phone/Email:</strong> ${getVal(fields.fatherPhone)} / ${getVal(fields.fatherEmail)}</li>
        <br/>
        <li><strong>Mother's Name:</strong> ${getVal(fields.motherName)}</li>
        <li><strong>Mother's Occupation:</strong> ${getVal(fields.motherOccupation)} (Salary: ${getVal(fields.motherSalary)})</li>
        <li><strong>Mother's Phone/Email:</strong> ${getVal(fields.motherPhone)} / ${getVal(fields.motherEmail)}</li>
      </ul>
      
      <p><em>* User agreed to the declaration statement.</em></p>
    `;

    await transporter.sendMail({
      from: `"Pharmacy Admissions Portal" <${process.env.EMAIL_USER}>`,
      to: 'enquiry@yourdomain.com', // change this to where you want to receive registrations
      replyTo: email !== 'N/A' ? email : process.env.EMAIL_USER,
      subject: `New ${course} Registration - ${firstName} ${lastName}`,
      html: emailHtml,
      attachments: attachments,
    });

    return res.status(200).json({ success: true, message: 'Registration sent successfully.' });
  } catch (err) {
    console.error('Registration submission error:', err);
    return res.status(500).json({ success: false, message: 'Failed to send registration. Please try again later.' });
  }
}