import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Catalog/productsData';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div className="product-loading">Загрузка товара...</div>;
  }

  return (
    <div className="product-page">
      <div className="product-container">
        {/* Галерея изображений */}
        <div className="product-gallery">
          <div className="thumbnail-images">
            {[product.image, ...(product.additionalImages || [])].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} ${index + 1}`}
                className={selectedImage === index ? 'active' : ''}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
          <div className="main-image">
            <img src={[product.image, ...(product.additionalImages || [])][selectedImage]} alt={product.name} />
          </div>
        </div>

        {/* Информация о товаре */}
        <div className="product-info">
          <h1>{product.name}</h1>
          
          <div className="product-meta">
            <span className="product-code">Артикул: {product.id}</span>
            <span className={`product-stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
              {product.stock > 0 ? `В наличии: ${product.stock} шт.` : 'Под заказ'}
            </span>
          </div>

          <div className="product-prices">
            {product.oldPrice && (
              <span className="old-price">{product.oldPrice} ₽</span>
            )}
            <span className="current-price">{product.price} ₽/м²</span>
          </div>

          <div className="product-actions">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
            <button className="add-to-cart">Добавить в корзину</button>
          </div>

          <div className="product-description">
            <h3>Описание</h3>
            <p>{product.description}</p>
          </div>

          <div className="product-specs">
            <h3>Характеристики</h3>
            <table>
              <tbody>
                <tr>
                  <td>Производитель</td>
                  <td>{product.brand || 'Не указано'}</td>
                </tr>
                <tr>
                  <td>Размер</td>
                  <td>{product.size || 'Не указано'}</td>
                </tr>
                <tr>
                  <td>Толщина</td>
                  <td>{product.thickness || 'Не указано'}</td>
                </tr>
                <tr>
                  <td>Цвет</td>
                  <td>
                    <div className="color-options">
                      {product.colors.map((color, i) => (
                        <span key={i} style={{ backgroundColor: color }} title={`Цвет ${i + 1}`}></span>
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;