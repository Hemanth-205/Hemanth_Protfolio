import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching projects:', err);
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
