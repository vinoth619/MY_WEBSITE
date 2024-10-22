
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './pages/HOME/home';
import About from './pages/ABOUT/About';
import Contact from './pages/CONTACT/contact';
import Project from './pages/PROJECTS/Project';
import Resume from './pages/RESUME/Resume';

const App = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <nav className="navbar">
        <div className="logo">
          PF
        </div>
        
        <div id="navigation" className={menuOpen ? 'active' : ''}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
            <li><Link to="/resume" onClick={toggleMenu}>Resume</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>

          </ul>
        </div>
        
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/projects" element={<Project></Project>} />
        <Route path="/resume" element={<Resume></Resume>}/>
       
        <Route path="/contact" element={<Contact></Contact>} />

      </Routes>
    </Router>
  );
}

export default App;



      
