import React, { useState } from 'react';
import './App.css'; // Import the regular CSS file
import Map from './Map.js';
import logo from './logo.png';
import menu_icon from './menu.svg';
import Menu from './Menu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <div>
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
      {/* Your existing content */}
      <Map />
      <img
        src={menu_icon}
        alt="Menu"
        style={{ position: 'absolute', top: '30px', left: '40px', height: '5vh', cursor: 'pointer', color: '#E98C58' }}
        onClick={toggleMenu}
      />
      <img src={logo} alt="Logo" style={{ position: 'absolute', bottom: '20px', left: '40px', height: '20vh' }} />
    </div>
  );
}

export default App;
