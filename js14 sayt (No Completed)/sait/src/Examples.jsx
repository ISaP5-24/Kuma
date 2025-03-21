import React, { useState, useEffect } from 'react';
import './Examples.css';
import image1 from './assets/Vanna/1.jpg';
import image2 from './assets/Vanna/2.jpg';
import image3 from './assets/Vanna/3.jpg';
import image4 from './assets/Vanna/4.jpg';
import image5 from './assets/Vanna/5.jpg';
import image6 from './assets/xamam/1.jpg';
import image7 from './assets/xamam/2.jpg';
import image8 from './assets/xamam/3.jpg';
import image9 from './assets/xamam/4.jpg';
import image10 from './assets/xamam/5.jpg';

function Examples() {
  const images = [image1, image2, image3, image4, image5];
  const images2 = [image6, image7, image8, image9, image10];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider">
      <h2 className="vanna">Ванная комната</h2>
      <div className="slide">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Ванная комната ${index + 1}`}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
      <h2 class = "vanna">Хамам</h2>
      <div className="slide">
        {images2.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Ванная комната ${index + 1}`}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
}

export default Examples;