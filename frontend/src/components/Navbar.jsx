import { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = ['home', 'education', 'service', 'internship', 'portfolio', 'research', 'certifications', 'contact'];
            const scrollPosition = window.scrollY + 120;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#service' },
        { name: 'Internship', href: '#internship' },
        { name: 'Projects', href: '#portfolio' },
        { name: 'Research', href: '#research' },
        { name: 'Credentials', href: '#certifications' },
        { name: 'Contact', href: '#contact' }
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="nav-content">
                    <a href="#home" className="logo" onClick={(e) => scrollToSection(e, '#home')}>
                        <div className="logo-circle">HG</div>
                        <div className="logo-text">
                            <span className="logo-name">Hemanth G</span>
                            <span className="logo-role">B.Tech IT</span>
                        </div>
                    </a>

                    <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={activeSection === link.href.substring(1) ? 'active' : ''}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="nav-actions">
                        <a href={`${import.meta.env.BASE_URL}HEMANTH_G.pdf`} download="HEMANTH_G.pdf" className="btn-primary nav-btn">
                            <FileDown size={15} />
                            <span>Resume</span>
                        </a>

                        <button 
                            className="mobile-toggle" 
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle navigation"
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
