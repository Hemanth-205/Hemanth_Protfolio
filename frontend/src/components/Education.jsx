import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
    const education = [
        {
            icon: <GraduationCap size={32} />,
            degree: 'B.Tech - Information Technology',
            institution: 'Manakula Vinayagar Institute of Technology',
            location: 'Puducherry',
            grade: 'CGPA: 8.5',
            year: '2022 - 2026'
        },
        {
            icon: <Award size={32} />,
            degree: 'HSC',
            institution: 'Seventh Day Adventist Hr Sec School',
            location: 'Puducherry',
            grade: '73%',
            year: '2022'
        }
    ];

    return (
        <section className="education" id="education">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">My <span className="highlight">Education</span></h2>
                    <p className="section-subtitle">
                        Academic background and qualifications
                    </p>
                </motion.div>

                <div className="education-grid">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="education-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="education-icon">{edu.icon}</div>
                            <h3>{edu.degree}</h3>
                            <p className="institution">{edu.institution}</p>
                            <p className="location">{edu.location}</p>
                            <div className="education-details">
                                <span className="grade">{edu.grade}</span>
                                <span className="year">{edu.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
