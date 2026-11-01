import { motion } from 'framer-motion';
import { Award, Trophy, CheckCircle, ShieldCheck } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const accomplishments = [
        {
            title: '1st Prize in National Technology Week Students Project Exhibition',
            provider: 'Conducted by IQAC & R&D Cell, MVIT, Puducherry (2026)'
        },
        {
            title: 'Research Paper: Big Data Privacy and Security in Data Analytics',
            provider: 'Published in IRJASH, Vol. 07, Issue 02, 2025 (DOI: 10.47392/IRJASH.2025.011)'
        },
        {
            title: 'Research Paper: Federated Trust-Aware Autonomous Self-Healing Framework for Multi-Controller SDN',
            provider: 'Published in IEEE Xplore, 7th IEEE ICSCAN 2026 (DOI: 10.1109/ICSCAN66520.2026.11588469)'
        },
        {
            title: 'Research Paper: Integrating Multimedia Technologies in Smart Cities',
            provider: 'International Conference on Computational Intelligence (ICCI-2025)'
        }
    ];

    const certifications = [
        {
            title: 'CCNA: Switching, Routing & Wireless Essentials',
            provider: 'Cisco Networking Academy (Verified)',
            verified: true
        },
        {
            title: 'Java Programming',
            provider: 'Spoken Tutorial Project, IIT Bombay',
            verified: true
        },
        {
            title: 'Automation Developer Associate Training (v2024.10)',
            provider: 'ICT Academy Cohort 2',
            verified: true
        },
        {
            title: 'Honors Diploma in Computer Programming',
            provider: 'SARVA I.T & Educational Development',
            verified: true
        },
        {
            title: 'Completion of RPA Design and Development v4.0',
            provider: 'UiPath'
        },
        {
            title: 'Completion of Power BI',
            provider: 'SKILL NATION'
        },
        {
            title: 'Completion of PHP and MySQL',
            provider: 'Spoken Tutorial Project, IIT Bombay'
        },
        {
            title: 'Completion of Frontend Development',
            provider: 'DATANERDZ.AI'
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
                    <span className="section-badge">Honors & Credentials</span>
                    <h2 className="section-title">Certifications & <span className="highlight">Accomplishments</span></h2>
                    <p className="section-subtitle">
                        Key recognitions, peer-reviewed contributions, and verified professional certifications
                    </p>
                </motion.div>

                {/* Accomplishments */}
                <div className="certs-group">
                    <h3 className="certs-group-title">
                        <Trophy size={20} className="group-title-icon" /> Key Accomplishments
                    </h3>
                    <div className="certs-grid">
                        {accomplishments.map((item, index) => (
                            <motion.div
                                key={index}
                                className="cert-card accomplishment-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="cert-icon-wrapper trophy-wrapper">
                                    <Trophy className="cert-award-icon" size={24} />
                                </div>
                                <div className="cert-info">
                                    <h3>{item.title}</h3>
                                    <p>{item.provider}</p>
                                </div>
                                <CheckCircle className="cert-check-icon" size={18} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div className="certs-group" style={{ marginTop: '3rem' }}>
                    <h3 className="certs-group-title">
                        <Award size={20} className="group-title-icon" /> Certifications & Credentials
                    </h3>
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
                                    {cert.verified ? (
                                        <ShieldCheck className="cert-award-icon" size={24} />
                                    ) : (
                                        <Award className="cert-award-icon" size={24} />
                                    )}
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
            </div>
        </section>
    );
};

export default Certifications;
