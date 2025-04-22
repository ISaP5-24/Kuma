import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.fromOrderButton) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1>Профессиональные услуги для вашего бизнеса</h1>
          <p>Мы предлагаем качественные решения по доступным ценам</p>
          <a href="/services" className="cta-button">Наши услуги</a>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Свяжитесь с нами</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default Home;