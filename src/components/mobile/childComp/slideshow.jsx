import React, { useState, useEffect } from 'react';

export const SlideshowMobile = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          clearInterval(timer);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};
