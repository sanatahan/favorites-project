import React from 'react';
import './Header.css'; // تأكد من المسار الصحيح لملف CSS
import logo from './Logo-og.png'; // استخدام import لجلب الصورة

function Header() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <header className="Header">
      <div className="Header-content">
        <p className="Header-text">This is my custom text above the image.</p>
        <img src={logo} alt="Logo" className="Header-image" />
        <button onClick={handleClick} className="Header-button">Click Me</button> {/* إضافة الزر */}
      </div>
    </header>
  );
}

export default Header;
