import React from 'react';
import './PopularCategories.css';
import { Link } from 'react-router-dom';

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Керамогранит',
      image: '/images/categories/porcelain.jpg',
      count: 128
    },
    {
      id: 2,
      name: 'Плитка',
      image: '/images/categories/tiles.jpg',
      count: 76
    },
    // Добавьте другие категории
  ];

  return (
    <section className="popular-categories">
      <h2 className="section-title">Популярные категории</h2>
      <div className="categories-grid">
        {categories.map(category => (
          <Link 
            to={`/catalog?category=${category.name}`} 
            key={category.id}
            className="category-card"
          >
            <img 
              src={category.image} 
              alt={category.name} 
              className="category-image"
            />
            <div className="category-info">
              <h3>{category.name}</h3>
              <span>{category.count} товаров</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;