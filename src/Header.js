import React from 'react';
import './Header.css';  // تأكدي من وجود ملف CSS للتنسيق
import logo from './Logo-og.png';  // تأكدي من وجود الصورة

function Header() {
  return (
    <header className="Header">
      <div className="Header-content">
        <p className="Header-text">Hello,This is my first project .</p> {/* النص المخصص */}
        <img src={logo} alt="Logo" className="Header-image" /> {/* الصورة */}
      </div>
    </header>
  );
}

export default Header;
