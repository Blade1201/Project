import React, { useState, useEffect } from 'react';

const AttractionsItem = ({ interval, images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const nextSlide = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
  
      return () => {
        clearInterval(nextSlide);
      };
    }, [interval, images]);
  
    const goToSlide = (index) => {
      setActiveIndex(index);
    };
  
    const goToPrevSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    const goToNextSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((src, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          >
            <img className="carousel-image" src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="carousel-control-prev" onClick={goToPrevSlide}>
          &lt;
        </button>
        <div className="carousel-indicators">
          {images.map((src, index) => (
            <button
              key={index}
              className={`carousel-indicator ${
                index === activeIndex ? 'active' : ''
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <button className="carousel-control-next" onClick={goToNextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default AttractionsItem;
