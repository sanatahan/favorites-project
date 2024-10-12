import React, { useState, useEffect } from 'react';
import './Home.css';
import softwareImage from '../assets/software.png';
import DescSlider from '../components/DescSlider';
import AgeSlider from '../components/AgeSlider';

const Home = ({ data }) => {
  const [homeData, setHomeData] = useState('');

  useEffect(() => {
    const fetchData = () => {
      setHomeData('This is home page for the Home page!');
    };
    
    fetchData();
  }, []);

  return (
    <div className="home-page">
      <img src={softwareImage} alt="Software" className="home-image" />
      <div className="text-container">
        <h1 className="home-title">Home Page</h1>
        <p className="dynamic-text">{homeData}</p>
      </div>
      <div className="slider-container">
        <DescSlider data={data} />
        <AgeSlider data={data} />
      </div>
    </div>
  );
};

export default Home;
