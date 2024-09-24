import React from 'react';
import Slider from './Slider';

const DescSlider = ({ data }) => {
  // تحقق من وجود البيانات
  if (!data || data.length === 0) {
    return <p>No data available</p>; // رسالة عند عدم وجود بيانات
  }

  // تصفية البيانات
  const filteredData = data.map(({ image, name, description }) => ({
    image,
    name,
    description,
  }));

  return <Slider data={filteredData} />;
};

export default DescSlider;
