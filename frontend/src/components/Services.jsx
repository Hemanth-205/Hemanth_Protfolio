import { motion } from 'framer-motion';
import { Code, Layout, Wrench } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: <Code size={32} />,
            title: 'Frontend Development',
            description: 'Building responsive and interactive web applications using HTML, CSS, JavaScript, and modern frameworks. Skilled in creating user-focused digital experiences.'
        },
        {
            icon: <Layout size={32} />,
            title: 'UI/UX Design',
            description: 'Designing intuitive interfaces using Figma and Canva. Focused on translating ideas into visually appealing and functional digital experiences.'
        },
        {
            icon: <Wrench size={32} />,
            title: 'Automation & Tools',
            description: 'Experienced with Power BI, UiPath Studio for RPA, and various development tools to enhance productivity and workflow automation.'
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
                    <h2 className="section-title">My <span className="highlight">Skills</span></h2>
                    <p className="section-subtitle">
                        Passionate about translating ideas into visually appealing and functional digital experiences.
                    </p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
