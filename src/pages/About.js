import React, { useState, useEffect } from 'react';
import './About.css';
import aboutImage from '../assets/soura.png'; 
import { useLocation } from 'react-router-dom';

const About = () => {
  const [aboutData, setAboutData] = useState('');
  const location = useLocation(); 

  useEffect(() => {
    const fetchData = () => {
      setAboutData('This is About page for the About page!');
    };
    
    fetchData();
  }, []);

  return (
    <div 
      className="about-page" 
      style={{ backgroundImage: `url(${aboutImage})` }}
    >
      <p className="dynamic-text">{aboutData}</p>
      <p>Current URL: {location.pathname}</p> 
    </div>
  );
};

export default About;
