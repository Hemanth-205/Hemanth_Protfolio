import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const staticProjects = [
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

    useEffect(() => {
        fetch('http://localhost:5000/api/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                console.warn('Backend not accessible, using static projects.');
                setProjects(staticProjects);
                setLoading(false);
            });
    }, []);

    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">My Recent <span className="highlight">Works</span></h2>
                    <p className="section-subtitle">
                        Here are a few design projects I've worked on recently.
                    </p>
                </motion.div>

                <div className="portfolio-grid">
                    {loading ? (
                        <p>Loading projects...</p>
                    ) : (
                        projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="portfolio-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="portfolio-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="portfolio-overlay">
                                        <span className="category">{project.category}</span>
                                    </div>
                                </div>
                                <div className="portfolio-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
