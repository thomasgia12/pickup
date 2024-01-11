// Menu.js

import React from 'react';
import './Menu.css';

const Menu = ({ isOpen, onClose }) => {
  return (
    <div className={`menu-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        {/* Add your menu options here */}
        <p>Profile</p>
        <p>Contact us</p>
        {/* ... */}
      </div>
    </div>
  );
};

export default Menu;
