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

    useEffect(() => {
        fetch('http://localhost:5000/api/projects', { cache: 'no-store' })
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
                    <h2 className="section-title">My Recent <span className="highlight">Projects</span></h2>
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
