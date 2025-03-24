import React from 'react';
import { FaShoppingCart, FaHeart, FaExchangeAlt, FaStar } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {product.oldPrice && (
        <div className="discount-badge">
          -{Math.round((1 - product.price / product.oldPrice) * 100)}%
        </div>
      )}
      
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="quick-actions">
          <button className="wishlist-btn">
            <FaHeart />
          </button>
          <button className="compare-btn">
            <FaExchangeAlt />
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={i < Math.floor(product.rating) ? 'filled' : ''} 
            />
          ))}
          <span>({product.rating})</span>
        </div>
        
        <div className="product-prices">
          {product.oldPrice && (
            <span className="old-price">{product.oldPrice} ₽</span>
          )}
          <span className="current-price">{product.price} ₽/м²</span>
        </div>
        
        <div className="product-stock">
          {product.stock > 0 ? (
            <span className="in-stock">В наличии: {product.stock} шт.</span>
          ) : (
            <span className="out-of-stock">Под заказ</span>
          )}
        </div>
        
        <button className="add-to-cart">
          <FaShoppingCart /> В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;