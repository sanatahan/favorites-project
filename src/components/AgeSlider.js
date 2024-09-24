import React from 'react';
import Slider from './Slider';

const AgeSlider = ({ data }) => {
  // تحقق من وجود البيانات
  if (!data || data.length === 0) {
    return <p>No data available</p>; // رسالة عند عدم وجود بيانات
  }

  // تصفية البيانات للأشخاص الذين تقل أعمارهم عن 30
  const filteredData = data.filter((person) => person.age < 30);

  return <Slider data={filteredData} />;
};

export default AgeSlider;
