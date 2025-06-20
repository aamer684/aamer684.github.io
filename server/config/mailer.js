const nodemailer = require('nodemailer');

// Sends email using nodemailer
const sendContactEmail = async ({
  name,
  email,
  phone,
  company,
  inquiryType,
  contactMethod,
  referral,
  message
}) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `New Contact Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Company: ${company || 'N/A'}
Inquiry Type: ${inquiryType || 'N/A'}
Preferred Contact Method: ${contactMethod || 'N/A'}
 ${referral || 'N/A'}

Message:
${message}
    `
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendContactEmail
};
