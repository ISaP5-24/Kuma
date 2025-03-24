import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import NavigationTabs from './components/NavigationTabs/NavigationTabs.jsx';
import HomePage from './pages/Home/HomePage.jsx';
import CatalogPage from './pages/Catalog/CatalogPage.jsx';
import ProductPage from './pages/Product/ProductPage.jsx';
import ContactsPage from './pages/Contacts/ContactsPage.jsx';
import AboutPage from './pages/About/AboutPage.jsx';
import Footer from './components/Footer/Footer.jsx';
import ScrollToTop from './utils/ScrollToTop.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <NavigationTabs />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<ProductPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;