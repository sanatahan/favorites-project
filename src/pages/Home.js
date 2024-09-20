import React, { useState, useEffect } from 'react';
import './Home.css';
import softwareImage from '../assets/software.png';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [homeData, setHomeData] = useState('');
  const location = useLocation(); 

  useEffect(() => {
    const fetchData = () => {
      setHomeData('This is home page for the Home page!');
    };
    
    fetchData();
  }, []);

  return (
    <div 
      className="home-page" 
      style={{ backgroundImage: `url(${softwareImage})` }}
    >
      <p className="dynamic-text">{homeData}</p>
      <p>Current URL: {location.pathname}</p> 
    </div>
  );
};

export default Home;
