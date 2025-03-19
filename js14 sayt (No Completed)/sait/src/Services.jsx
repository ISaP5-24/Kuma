import React, { useState } from 'react';
import './Services.css';

function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: 'Укладка керамогранита',
      description: 'Профессиональная укладка керамогранита на пол и стены. Гарантия качества и долговечности.',
    }
  ];

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="section">
      <h2>Услуги</h2>
      <ul className="services-list">
        {services.map((service, index) => (
          <li key={index}>
            <div className="service-title" onClick={() => toggleDescription(index)}>
              {service.title} {openIndex === index ? '▲' : '▼'}
            </div>
            <div
              className={`service-description ${openIndex === index ? 'open' : ''}`}
            >
              {service.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;