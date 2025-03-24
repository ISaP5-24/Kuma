import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationTabs.css';

const NavigationTabs = () => {
  return (
    <nav className="navigation-tabs">
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/catalog" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Каталог
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            О компании
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contacts" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationTabs;