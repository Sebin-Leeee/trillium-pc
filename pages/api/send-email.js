import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sebinlee@matildamarketingservices.com', // Replace with your Gmail address
      pass: '^^aa311279' // Replace with your Gmail password or app-specific password
    }
  });
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, message } = req.body;

      const mailOptions = {
        from: email, // Sender's email address (user-provided)
        to: 'sebinlee@matildamarketingservices.com', // Replace with recipient email address
        subject: 'New Message from Contact Form',
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Message: ${message}
        `
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email. Please try again later.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
