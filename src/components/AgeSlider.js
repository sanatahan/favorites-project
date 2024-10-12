import React from 'react';
import Slider from './Slider';

const AgeSlider = ({ data }) => {
  
  if (!data || data.length === 0) {
    return <p>No data available</p>; 
  }

  const filteredData = data.filter((person) => person.age < 30);

  return <Slider data={filteredData} />;
};

export default AgeSlider;
