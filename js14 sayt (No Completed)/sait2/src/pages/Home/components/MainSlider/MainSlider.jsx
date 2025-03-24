import React, { useState, useEffect } from 'react';
import './MainSlider.css';
import { sliderData } from './sliderData'; // Импорт данных для слайдера

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {sliderData.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={slide.title} />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button className="slider-button">{slide.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {sliderData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainSlider;