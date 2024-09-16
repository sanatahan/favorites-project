import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import backgroundImage from '../../assets/software.png'; 

const Header = () => {
  const [showHomeMenu, setShowHomeMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const handleClickOutside = (event) => {
    if (homeRef.current && !homeRef.current.contains(event.target)) {
      setShowHomeMenu(false);
    }
    if (aboutRef.current && !aboutRef.current.contains(event.target)) {
      setShowAboutMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="header-content">
        <div className="dropdown" ref={homeRef} onClick={() => setShowHomeMenu(!showHomeMenu)}>
          <h1>Home</h1>
          {showHomeMenu && (
            <ul className="dropdown-menu">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          )}
        </div>
        <div className="dropdown" ref={aboutRef} onClick={() => setShowAboutMenu(!showAboutMenu)}>
          <h2>About</h2>
          {showAboutMenu && (
            <ul className="dropdown-menu">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}


export default Header;
