import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Examples from './Examples';
import Services from './Services';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-link">Главная</Link>
        <Link to="/examples" className="nav-link">Примеры работ</Link>
        <Link to="/services" className="nav-link">Услуги</Link>
        <Link to="/contact" className="nav-link">Контакты</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;