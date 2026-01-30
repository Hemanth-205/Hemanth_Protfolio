import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Internship.css';

const Internship = () => {
    const internships = [
        {
            company: 'MOTION CUT',
            role: 'Frontend Developer',
            duration: 'February 2025 - March 2025',
            location: 'Remote',
            description: 'Worked on frontend development projects, building responsive and interactive web applications using modern web technologies.',
            icon: <Briefcase size={24} />
        },
        {
            company: 'NEXTGEN SOLUTION',
            role: 'Data Analyst',
            duration: 'June 2025 - July 2025',
            location: 'Remote',
            description: 'Analyzed data sets and created insights using Power BI and other data analytics tools to support business decisions.',
            icon: <Briefcase size={24} />
        }
    ];

    return (
        <section className="internship" id="internship">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">My <span className="highlight">Internships</span></h2>
                    <p className="section-subtitle">
                        Professional experience and hands-on learning
                    </p>
                </motion.div>

                <div className="internship-grid">
                    {internships.map((internship, index) => (
                        <motion.div
                            key={index}
                            className="internship-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="internship-header">
                                <div className="internship-icon">{internship.icon}</div>
                                <div className="internship-title">
                                    <h3>{internship.role}</h3>
                                    <p className="company">{internship.company}</p>
                                </div>
                            </div>

                            <div className="internship-meta">
                                <span className="duration">
                                    <Calendar size={16} />
                                    {internship.duration}
                                </span>
                                <span className="location">
                                    <MapPin size={16} />
                                    {internship.location}
                                </span>
                            </div>

                            <p className="internship-description">{internship.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Internship;
