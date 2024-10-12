import React from 'react';
import Slider from './Slider';

const DescSlider = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>; 
  }

  const filteredData = data.map(({ image, name, description }) => ({
    image,
    name,
    description,
  }));

  return <Slider data={filteredData} />;
};

export default DescSlider;
