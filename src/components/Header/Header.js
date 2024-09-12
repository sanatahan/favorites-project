import React from 'react';
import './Header.css';
import logo from '../../assets/Logo-og.png';

const Header = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <header className="Header">
      <div className="Header-content">
        <img src={logo} alt="Logo" className="Header-image" />
        <h1>Welcome to My First Project</h1>
        <button onClick={handleClick} className="Header-button">Click Me</button>
      </div>
    </header>
  );
};

export default Header;
