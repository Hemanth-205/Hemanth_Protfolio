import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Services from './components/Services';
import Internship from './components/Internship';
import Portfolio from './components/Portfolio';
import Research from './components/Research';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';

function App() {
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
          <p>&copy; 2026 Hemanth G. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
