import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            title: '1st Prize - National Technology Week Project Exhibition',
            provider: 'IQAC & R&D Cell, MVIT, Puducherry (2026)'
        },
        {
            title: 'CCNA: Switching, Routing & Wireless Essentials',
            provider: 'Cisco Networking Academy'
        },
        {
            title: 'Honors Diploma in Computer Programming',
            provider: 'SARVA I.T & Educational Development'
        },
        {
            title: 'Completion of Power BI',
            provider: 'SKILL NATION'
        },
        {
            title: 'Completion of Java',
            provider: 'Spoken Tutorial Project, IIT Bombay'
        },
        {
            title: 'Completion of PHP and MySQL',
            provider: 'Spoken Tutorial Project, IIT Bombay'
        },
        {
            title: 'Completion of Frontend Development',
            provider: 'DATANERDZ.AI'
        },
        {
            title: 'Completion of RPA Design and Development v4.0',
            provider: 'UiPath'
        },
        {
            title: 'Automation Developer Associate Training (v2024.10)',
            provider: 'ICT Academy Cohort 2'
        }
    ];

    return (
        <section className="certifications" id="certifications">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">My <span className="highlight">Certifications & Achievements</span></h2>
                    <p className="section-subtitle">
                        Professional certifications, achievements, and technical training
                    </p>
                </motion.div>

                <div className="certs-grid">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="cert-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="cert-icon-wrapper">
                                <Award className="cert-award-icon" size={24} />
                            </div>
                            <div className="cert-info">
                                <h3>{cert.title}</h3>
                                <p>{cert.provider}</p>
                            </div>
                            <CheckCircle className="cert-check-icon" size={18} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
