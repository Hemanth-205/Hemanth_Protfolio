import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, Sparkles } from 'lucide-react';
import './Education.css';

const Education = () => {
    const education = [
        {
            icon: <GraduationCap size={28} />,
            degree: 'Bachelor of Technology – Information Technology',
            institution: 'Manakula Vinayagar Institute of Technology',
            location: 'Puducherry, India',
            grade: 'CGPA 8.5',
            year: '2023 - 2027',
            featured: true
        },
        {
            icon: <Award size={28} />,
            degree: 'Higher Secondary Certificate (HSC)',
            institution: 'Seventh Day Adventist Higher Secondary School',
            location: 'Puducherry, India',
            grade: 'Score: 73.33%',
            year: '2023',
            featured: false
        },
        {
            icon: <Award size={28} />,
            degree: 'Secondary School Leaving Certificate (SSLC)',
            institution: 'Seventh Day Adventist Higher Secondary School',
            location: 'Puducherry, India',
            grade: 'Grade: Pass',
            year: '2021',
            featured: false
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
                    <span className="section-badge">Academic Background</span>
                    <h2 className="section-title">Education & <span className="highlight">Qualifications</span></h2>
                    <p className="section-subtitle">
                        Academic journey and technical foundations from higher secondary to university
                    </p>
                </motion.div>

                <div className="education-grid">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className={`education-card ${edu.featured ? 'featured-card' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                        >
                            {edu.featured && (
                                <div className="card-top-tag">
                                    <Sparkles size={13} /> Current Degree
                                </div>
                            )}
                            <div className="edu-card-header">
                                <div className="education-icon-box">{edu.icon}</div>
                                <span className="grade-badge">{edu.grade}</span>
                            </div>

                            <div className="edu-card-body">
                                <h3>{edu.degree}</h3>
                                <p className="institution">{edu.institution}</p>
                                
                                <div className="edu-card-meta">
                                    <span className="edu-meta-item">
                                        <MapPin size={15} /> {edu.location}
                                    </span>
                                    <span className="edu-meta-item">
                                        <Calendar size={15} /> {edu.year}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;