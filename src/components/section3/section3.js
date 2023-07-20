import React, { useState } from 'react';
import './Section3.css';
import Image1 from './img1.jpg';
import Image2 from './img2.jpg';
import Image3 from './img3.jpg';
import Image4 from './img4.jpg';

const Section3 = () => {
  const images = [Image1, Image2, Image3, Image4];
  const descriptions1 = ["Egypt", "Turkey", "Japan", "Mexico"];
  const descriptions2 = ["$690", "$390", "$490", "$690"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="section3">
      <h1>Popular Trips</h1>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <div className="arrows">
        <div className="prev-arrow" onClick={handlePrevClick}>
          &lt;
        </div>
      </div>
      <div className="image-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image ${index === currentImageIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Image ${index + 1}`} />
            <h3>{descriptions1[index]}</h3>
            <h4>from</h4>
            <h5>{descriptions2[index]}</h5>
          </div>
        ))}
      </div>
      <div className="arrows">
        <div className="next-arrow" onClick={handleNextClick}>
          &gt;
        </div>
      </div>
    </div>
  );
};

export default Section3;
