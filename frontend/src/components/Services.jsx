import { motion } from 'framer-motion';
import { Code, Layout, Network, Cpu, Database, Wrench } from 'lucide-react';
import './Services.css';

const Services = () => {
    const skillCategories = [
        {
            icon: <Code size={30} />,
            title: 'Programming & Databases',
            description: 'Core object-oriented programming, scalable backend services, and database management.',
            skills: ['Java', 'SQL', 'MongoDB', 'Spring Boot', 'REST APIs']
        },
        {
            icon: <Layout size={30} />,
            title: 'Frontend Development',
            description: 'Building responsive, user-friendly, and modern web interfaces.',
            skills: ['HTML', 'CSS', 'JavaScript', 'React.js']
        },
        {
            icon: <Network size={30} />,
            title: 'Networking & Operating Systems',
            description: 'CCNA-certified in enterprise network architecture, protocols, and systems administration.',
            skills: ['CCNA Certified', 'Network Architecture', 'Switching & Routing', 'Wireless Essentials', 'Network Troubleshooting', 'Windows', 'Linux']
        },
        {
            icon: <Wrench size={30} />,
            title: 'Tools & Platforms',
            description: 'Design, business intelligence, robotic process automation, and developer workflows.',
            skills: ['Figma', 'Canva', 'Power BI', 'UiPath Studio', 'ESP32 & IoT', 'Git / GitHub']
        }
    ];

    return (
        <section className="services" id="service">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-badge">Technical Stack & Tools</span>
                    <h2 className="section-title">Core <span className="highlight">Competencies</span></h2>
                    <p className="section-subtitle">
                        Key proficiencies and technologies across software development, networking, and analytics
                    </p>
                </motion.div>

                <div className="services-grid">
                    {skillCategories.map((cat, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="service-icon">{cat.icon}</div>
                            <h3>{cat.title}</h3>
                            <p>{cat.description}</p>
                            <div className="skill-tags">
                                {cat.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
