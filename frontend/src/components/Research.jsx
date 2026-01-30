import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import './Research.css';

const Research = () => {
    const publications = [
        {
            title: 'Big Data Privacy and Security in Data Analytics: A Review on Issues, Challenges, and Privacy-Preserving Methods',
            journal: 'IRJASH',
            details: 'Vol. 07, Issue 02, 2025 (DOI: 10.47392/IRJASH.2025.011)',
            description: 'Published a research paper focusing on Big Data privacy and security challenges. Reviewed solutions like K-anonymity, L-diversity, and T-closeness, and assessed security practices by IBM, Microsoft, and Infosys.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
            year: '2025'
        },
        {
            title: 'Integrating Multimedia Technologies in Smart Cities: Advancing Surveillance and Interactive Digital Signage for Urban Efficiency',
            journal: 'International Conference on Computational Intelligence (ICCI-2025)',
            details: 'Submitted Research Paper',
            description: 'Submitted a research paper exploring the integration of multimedia and IoT for real-time surveillance and digital signage in urban environments. Focused on enhancing urban safety, communication, and data-driven efficiency.',
            image: `${import.meta.env.BASE_URL}smart-city.png`,
            year: '2025'
        }
    ];

    return (
        <section className="research" id="research">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Research & <span className="highlight">Publications</span></h2>
                    <p className="section-subtitle">
                        Academic contributions and research work
                    </p>
                </motion.div>

                <div className="research-grid">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            className="research-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="research-image">
                                <img src={pub.image} alt={pub.title} />
                                <div className="research-overlay">
                                    <span className="year-badge">{pub.year}</span>
                                </div>
                            </div>
                            <div className="research-content">
                                <div className="research-icon">
                                    <FileText size={24} />
                                </div>
                                <h3>{pub.title}</h3>
                                <p className="journal">{pub.journal}</p>
                                <p className="details">{pub.details}</p>
                                <p className="description">{pub.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
