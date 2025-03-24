import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import './ContactsPage.css';

const ContactsPage = () => {
  return (
    <div className="contacts-page">
      <div className="container">
        <h1>Контакты</h1>
        
        <div className="contacts-grid">
          <div className="contact-info">
            <h2>Наши реквизиты</h2>
            
            <div className="info-item">
              <h3>Адрес:</h3>
              <p>г. Москва, ул. Примерная, 123, офис 45</p>
            </div>
            
            <div className="info-item">
              <h3>Телефоны:</h3>
              <p>+7 (495) 123-45-67</p>
              <p>+7 (926) 765-43-21</p>
            </div>
            
            <div className="info-item">
              <h3>Email:</h3>
              <p>info@keramogranit77.ru</p>
            </div>
            
            <div className="info-item">
              <h3>Режим работы:</h3>
              <p>Пн-Пт: 9:00 - 18:00</p>
              <p>Сб: 10:00 - 15:00</p>
              <p>Вс: выходной</p>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <h2>Остались вопросы?</h2>
            <p>Заполните форму и мы свяжемся с вами в ближайшее время</p>
            <ContactForm />
          </div>
        </div>
        
        <div className="map-container">
          <iframe 
            title="Карта"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c4d5e6f7g8h9i0j&amp;source=constructor"
            width="100%" 
            height="400" 
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;