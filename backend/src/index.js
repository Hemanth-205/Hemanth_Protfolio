const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Project data from Hemanth's resume (only actual projects, not research)
const projects = [
  {
    id: 1,
    title: 'Medical History Management Website',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    description: 'MedHistory is a digital personal health record platform designed to manage and organize medical information efficiently. Focuses on secure, accessible, and user-friendly management of personal healthcare data.',
    technologies: 'Java, HTML, CSS, JavaScript, MongoDB'
  },
  {
    id: 2,
    title: 'AI-Powered Secure Digital Evidence Collection and Analysis System',
    category: 'Web Development & Security',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    description: 'Developed a secure digital evidence management system that authenticates investigators and enables secure evidence submission. Implemented SHA-256 integrity verification, AI-based evidence analysis, incident timeline reconstruction, and automated forensic report generation.',
    technologies: 'Java, Spring Boot, REST API, React.js, MongoDB'
  }
];

// Routes
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

const nodemailer = require('nodemailer');

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form received:', { name, email, message });

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'grhemanth26@gmail.com',
      subject: `New Portfolio Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message received and email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    // Even if email fails, we shouldn't crash. But we should let frontend know.
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

app.get('/', (req, res) => {
  res.send('Hemanth G - Portfolio Backend API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
