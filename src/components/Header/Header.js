import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="dropdown">
          <h1><Link to="/home">Home</Link></h1> 
          <ul className="dropdown-menu">
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
        <div className="dropdown">
          <h2><Link to="/about">About</Link></h2>
          <ul className="dropdown-menu">
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
        <div className="dropdown">
          <h2><Link to="/signup">Sign Up</Link></h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
