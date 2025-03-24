import React from 'react';
import MainSlider from './components/MainSlider';
import Advantages from './components/Advantages';
import PopularCategories from './components/PopularCategories';
import SpecialOffers from './components/SpecialOffers';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <MainSlider />
      <Advantages />
      <PopularCategories />
      <SpecialOffers />
      
      <section className="about-section">
        <div className="container">
          <h2>Керамогранит от производителя</h2>
          <p>
            Мы предлагаем широкий ассортимент керамогранита от ведущих мировых производителей
            по конкурентным ценам с доставкой по всей России.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;