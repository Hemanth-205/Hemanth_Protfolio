import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Internship.css';

const Internship = () => {
    const internships = [
        {
            company: 'NEXTGEN SOLUTION',
            role: 'Data Analyst',
            duration: 'June 2025 - July 2025',
            location: 'Remote',
            points: [
                'Analyzed and troubleshot data-driven workflows, identifying issues and applying structured problem-solving to resolve data quality and reporting gaps.',
                'Built dashboards and reports using Power BI to communicate findings clearly to stakeholders.'
            ],
            icon: <Briefcase size={24} />
        },
        {
            company: 'MOTION CUT',
            role: 'Frontend Developer',
            duration: 'February 2025 - March 2025',
            location: 'Remote',
            points: [
                'Developed and debugged responsive, user-facing web components, collaborating with the team to resolve issues and meet functional requirements.',
                'Gained practical experience with HTML, CSS, and JavaScript in a fast-paced, deadline-driven environment.'
            ],
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
                    <span className="section-badge">Industry Experience</span>
                    <h2 className="section-title">Professional <span className="highlight">Internships</span></h2>
                    <p className="section-subtitle">
                        Practical industry experience, real-world development, and data-driven problem solving
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

                            <ul className="internship-bullets">
                                {internship.points.map((pt, pIdx) => (
                                    <li key={pIdx}>{pt}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Internship;
