import React from 'react';
import './Advantages.css';
import { FaTruck, FaShieldAlt, FaMedal, FaHeadset } from 'react-icons/fa';

const Advantages = () => {
  const items = [
    {
      icon: <FaTruck size={40} />,
      title: "Быстрая доставка",
      text: "По Москве за 1-2 дня"
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Гарантия качества",
      text: "Официальная гарантия"
    },
    {
      icon: <FaMedal size={40} />,
      title: "Проверенные бренды",
      text: "Только сертифицированные производители"
    },
    {
      icon: <FaHeadset size={40} />,
      title: "Поддержка 24/7",
      text: "Консультации специалистов"
    }
  ];

  return (
    <section className="advantages">
      <div className="container">
        <h2 className="section-title">Наши преимущества</h2>
        <div className="advantages-grid">
          {items.map((item, index) => (
            <div key={index} className="advantage-card">
              <div className="advantage-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;