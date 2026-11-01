import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Services from './components/Services';
import Internship from './components/Internship';
import Portfolio from './components/Portfolio';
import Research from './components/Research';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import './App.css';

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Education />
      <Services />
      <Internship />
      <Portfolio />
      <Research />
      <Certifications />
      <Contact />
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-badge">HG</span>
                <span className="brand-name">Hemanth G</span>
              </div>
              <p className="footer-tagline">
                B.Tech Information Technology student specializing in software engineering, full-stack development, and IoT solutions.
              </p>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#service">Skills</a></li>
                <li><a href="#internship">Internships</a></li>
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#research">Research</a></li>
                <li><a href="#certifications">Credentials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-social">
              <h4>Connect</h4>
              <div className="footer-social-icons">
                <a href="https://github.com/Hemanth-205" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/hemanth-g25" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:grhemanth26@gmail.com" aria-label="Email">
                  <Mail size={18} />
                </a>
              </div>
              <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
                <ArrowUp size={16} /> Back to Top
              </button>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Hemanth G. All rights reserved.</p>
            <p className="designed-by">Designed with precision & elegance</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;