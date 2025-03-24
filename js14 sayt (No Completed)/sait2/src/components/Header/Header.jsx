import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaShoppingCart, FaUser } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Верхняя панель с контактами */}
      <div className="header-top">
        <div className="container">
          <div className="contacts">
            <span><FaPhone /> +7 (495) 123-45-67</span>
            <span><FaEnvelope /> info@keramogranit77.ru</span>
            <span><FaMapMarkerAlt /> Москва, ул. Примерная, 123</span>
          </div>
        </div>
      </div>

      {/* Основная часть шапки */}
      <div className="header-main">
        <div className="container">
          <div className="logo">
            <h1>КерамоГранит77</h1>
            <p>Официальный поставщик керамогранита</p>
          </div>

          <div className="user-actions">
            <button className="cart-btn">
              <FaShoppingCart />
              <span className="cart-count">0</span>
            </button>
            <button className="auth-btn">
              <FaUser />
              <span>Войти</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;