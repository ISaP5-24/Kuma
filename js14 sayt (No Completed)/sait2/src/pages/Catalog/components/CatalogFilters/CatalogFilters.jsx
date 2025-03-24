import React, { useState } from 'react';
import './CatalogFilters.css';

const CatalogFilters = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 10000],
    inStock: false
  });

  const categories = [
    'Все',
    'Премиум',
    'Стандарт',
    'Эконом',
    'Импортные',
    'Отечественные'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newFilters = {
      ...filters,
      [name]: type === 'checkbox' ? checked : value
    };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const handlePriceChange = (e, index) => {
    const newPriceRange = [...filters.priceRange];
    newPriceRange[index] = parseInt(e.target.value) || 0;
    setFilters({ ...filters, priceRange: newPriceRange });
    onFilter({ ...filters, priceRange: newPriceRange });
  };

  return (
    <div className="catalog-filters">
      <h3>Фильтры</h3>
      
      <div className="filter-group">
        <label>Категория:</label>
        <select 
          name="category" 
          value={filters.category}
          onChange={handleChange}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat === 'Все' ? '' : cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <label>Цена (₽):</label>
        <div className="price-range">
          <input
            type="number"
            value={filters.priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            min="0"
            placeholder="От"
          />
          <span>-</span>
          <input
            type="number"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            min={filters.priceRange[0]}
            placeholder="До"
          />
        </div>
      </div>
      
      <div className="filter-group">
        <label>
          <input
            type="checkbox"
            name="inStock"
            checked={filters.inStock}
            onChange={handleChange}
          />
          Только в наличии
        </label>
      </div>
    </div>
  );
};

export default CatalogFilters;