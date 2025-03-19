import React from 'react';
import Home from './home.jsx';
import Examples from './Examples.jsx';
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import './App.css';
import './button.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
