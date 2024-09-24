import React, { useState } from 'react';
import logo2 from '../assets/logo2.png'; // تأكد من المسار الصحيح

const SliderComponent = () => {
  const profiles = [
    { name: 'John', age: 25, description: 'Software Developer', img: logo2 },
    { name: 'Jane', age: 28, description: 'Web Designer', img: logo2 },
    { name: 'Mike', age: 22, description: 'Data Analyst', img: logo2 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProfile = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  const previousProfile = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + profiles.length) % profiles.length
    );
  };

  return (
    <div className="slider">
      <img 
        src={profiles[currentIndex].img} 
        alt={profiles[currentIndex].name} 
        style={{ width: '10%', height: 'auto' }} 
      />
      <h2>{profiles[currentIndex].name}</h2>
      <p>{profiles[currentIndex].age} years old</p>
      <p>{profiles[currentIndex].description}</p>
      <button onClick={previousProfile}>Previous</button>
      <button onClick={nextProfile}>Next</button>
    </div>
  );
};

export default SliderComponent;
