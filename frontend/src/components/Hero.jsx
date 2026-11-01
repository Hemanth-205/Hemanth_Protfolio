import { Linkedin, Mail, FileDown, ArrowRight, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="bg-ambient">
                <div className="ambient-glow-1"></div>
                <div className="ambient-glow-2"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <motion.div
                        className="hero-grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="main-intro">
                            <motion.div 
                                className="status-pill"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="status-dot"></span>
                                <span className="status-text">Available for Software Engineering Roles</span>
                            </motion.div>

                            <h1 className="hero-title">
                                Hi, I'm <span className="highlight">Hemanth G</span>
                            </h1>

                            <p className="hero-subtitle">
                                B.Tech IT Graduate & <span className="hero-role-accent">Software Developer</span>
                            </p>

                            <p className="hero-description">
                                Final-year B.Tech Information Technology student with knowledge of Java, JavaScript, SQL, MongoDB, and web development using HTML, CSS, and React.js. Strong understanding of networking, Windows and Linux operating systems, and technical troubleshooting. Skilled in problem-solving and application development, with experience using Figma, Canva, Power BI, and UiPath Studio. Seeking an entry-level software engineering role to apply my technical skills and contribute to developing reliable software solutions.
                            </p>

                            {/* Location & Quick Meta */}
                            <div className="hero-quick-meta">
                                <span className="meta-item">
                                    <MapPin size={16} className="meta-icon" /> Puducherry, India
                                </span>
                                <span className="meta-item">
                                    <CheckCircle2 size={16} className="meta-icon" /> CCNA Certified
                                </span>
                                <span className="meta-item">
                                    <Sparkles size={16} className="meta-icon" /> CGPA 8.5
                                </span>
                            </div>

                            <div className="hero-actions">
                                <a href="#contact" className="btn-primary hero-btn">
                                    <span>Get in Touch</span>
                                    <ArrowRight size={18} />
                                </a>
                                <a href={`${import.meta.env.BASE_URL}HEMANTH_G.pdf`} download="HEMANTH_G.pdf" className="btn-secondary hero-btn">
                                    <FileDown size={18} />
                                    <span>Download Resume</span>
                                </a>
                                
                                <div className="social-icons">
                                    <a href="https://github.com/Hemanth-205" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                    <a href="https://www.linkedin.com/in/hemanth-g25" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="mailto:grhemanth26@gmail.com" className="social-icon" title="Email">
                                        <Mail size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Metrics Strip */}
                            <div className="hero-metrics">
                                <div className="metric-box">
                                    <span className="metric-val">8.5</span>
                                    <span className="metric-label">CGPA (B.Tech IT)</span>
                                </div>
                                <div className="metric-box">
                                    <span className="metric-val">CCNA</span>
                                    <span className="metric-label">Cisco Certified</span>
                                </div>
                                <div className="metric-box">
                                    <span className="metric-val">3+</span>
                                    <span className="metric-label">Research Papers</span>
                                </div>
                                <div className="metric-box">
                                    <span className="metric-val">1st</span>
                                    <span className="metric-label">Prize Winner</span>
                                </div>
                            </div>
                        </div>

                        {/* Visual Image with Floating Tech Badges */}
                        <div className="hero-image-wrapper">
                            <div className="image-backdrop-glow"></div>
                            <div className="image-card">
                                <motion.img
                                    src={`${import.meta.env.BASE_URL}hemanth-hero.png`}
                                    alt="Hemanth G"
                                    className="hero-image"
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                                />
                            </div>

                            {/* Floating Tech Badges */}
                            <motion.div 
                                className="float-badge float-badge-1"
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                            >
                                <span className="badge-icon">☕</span>
                                <div className="badge-text">
                                    <strong>Java & Spring</strong>
                                    <span>Core Dev</span>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="float-badge float-badge-2"
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                            >
                                <span className="badge-icon">🌐</span>
                                <div className="badge-text">
                                    <strong>React & JS</strong>
                                    <span>Frontend</span>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="float-badge float-badge-3"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                            >
                                <span className="badge-icon">🛡️</span>
                                <div className="badge-text">
                                    <strong>CCNA & Linux</strong>
                                    <span>Networking</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;