import React from 'react';
import './SpecialOffers.css';
import { FaFire } from 'react-icons/fa';

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: 'Скидка 30% на испанскую плитку',
      description: 'Только до конца месяца',
      image: '/images/offers/spanish-tile.jpg',
      discount: '30%'
    },
    {
      id: 2,
      title: 'Бесплатная доставка',
      description: 'При заказе от 50 000 ₽',
      image: '/images/offers/free-delivery.jpg',
      discount: 'FREE'
    }
  ];

  return (
    <section className="special-offers">
      <h2 className="section-title">
        <FaFire className="fire-icon" /> Специальные предложения
      </h2>
      <div className="offers-grid">
        {offers.map(offer => (
          <div key={offer.id} className="offer-card">
            <div className="offer-badge">{offer.discount}</div>
            <img 
              src={offer.image} 
              alt={offer.title}
              className="offer-image"
            />
            <div className="offer-content">
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <button className="offer-button">Подробнее</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;