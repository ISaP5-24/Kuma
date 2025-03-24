import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaVk, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-columns">
            <div className="footer-column">
              <h3>Компания</h3>
              <ul>
                <li><a href="/about">О нас</a></li>
                <li><a href="/news">Новости</a></li>
                <li><a href="/vacancies">Вакансии</a></li>
                <li><a href="/reviews">Отзывы</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Покупателям</h3>
              <ul>
                <li><a href="/delivery">Доставка и оплата</a></li>
                <li><a href="/guarantee">Гарантия</a></li>
                <li><a href="/returns">Возврат товара</a></li>
                <li><a href="/faq">FAQ</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Каталог</h3>
              <ul>
                <li><a href="/catalog/floor">Напольный керамогранит</a></li>
                <li><a href="/catalog/wall">Настенная плитка</a></li>
                <li><a href="/catalog/stairs">Ступени</a></li>
                <li><a href="/catalog/porcelain">Керамогранит</a></li>
              </ul>
            </div>
            
            <div className="footer-column contacts">
              <h3>Контакты</h3>
              <ul>
                <li><FaPhone /> +7 (495) 123-45-67</li>
                <li><FaEnvelope /> info@keramogranit77.ru</li>
                <li><FaMapMarkerAlt /> Москва, ул. Примерная, 123</li>
              </ul>
              
              <div className="social-links">
                <a href="#"><FaVk /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaYoutube /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            © 2023 КерамоГранит77. Все права защищены.
          </div>
          <div className="legal-links">
            <a href="/privacy">Политика конфиденциальности</a>
            <a href="/agreement">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;