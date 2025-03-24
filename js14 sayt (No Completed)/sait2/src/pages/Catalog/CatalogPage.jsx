import React, { useState } from 'react';
import { products } from './productsData.js';
import ProductCard from "./components/ProductCard/ProductCard.jsx";
import CatalogFilters from './components/CatalogFilters/CatalogFilters.jsx';
import './CatalogPage.css';

const CatalogPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState('default');

  const handleFilter = (filters) => {
    let result = [...products];
    
    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }
    
    if (filters.priceRange) {
      result = result.filter(p => 
        p.price >= filters.priceRange[0] && 
        p.price <= filters.priceRange[1]
      );
    }
    
    setFilteredProducts(result);
  };

  const handleSort = (option) => {
    setSortOption(option);
    let sorted = [...filteredProducts];
    
    switch(option) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        sorted = [...products];
    }
    
    setFilteredProducts(sorted);
  };

  return (
    <div className="catalog-page">
      <h1>Каталог керамогранита</h1>
      
      <div className="catalog-controls">
        <CatalogFilters onFilter={handleFilter} />
        
        <div className="sort-options">
          <label>Сортировка:</label>
          <select 
            value={sortOption} 
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="default">По умолчанию</option>
            <option value="price-asc">По возрастанию цены</option>
            <option value="price-desc">По убыванию цены</option>
            <option value="name-asc">По названию (А-Я)</option>
          </select>
        </div>
      </div>
      
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;