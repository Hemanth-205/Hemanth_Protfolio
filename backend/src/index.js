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
    description: 'A modern personal health record and medical history management platform. Built as a high-performance Progressive Web App (PWA) with HTML, CSS, and JavaScript, featuring secure data management and universal accessibility.',
    technologies: 'HTML, CSS, JavaScript, PWA'
  },
  {
    id: 2,
    title: 'IR-Based Home Appliances Control System',
    category: 'IoT & Embedded Systems',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
    description: 'Designed and implemented a system to control home appliances using an IR remote. Utilized an IR sensor and Arduino microcontroller to process commands, enabling users to toggle appliances like lights and fans.',
    technologies: 'Arduino, IR Sensor, Embedded C'
  }
];

// Routes
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form received:', { name, email, message });
  res.status(200).json({ message: 'Message received successfully!' });
});

app.get('/', (req, res) => {
  res.send('Hemanth G - Portfolio Backend API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
