import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 3 }
];

const ElasticCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === 7) { // Adjust '7' based on the number of items
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 1000); // Adjust the interval time as needed

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="carousel-container">
      <Carousel breakPoints={breakPoints} autoPlay={true} enableAutoPlay={true} activeIndex={currentIndex}>
        <img src="Course offering faculty.jpg" alt="Image 1" style={{ height: '350px' }} />
        <img src="Course offering faculty.jpg" alt="Image 2" style={{ height: '350px' }} />
        <img src="Course offering faculty.jpg" alt="Image 3" style={{ height: '350px' }} />
        <img src="Course offering faculty.jpg" alt="Image 4" style={{ height: '350px' }} />
        <img src="Course offering faculty.jpg" alt="Image 5" style={{ height: '350px' }} />
        <img src="Course offering faculty.jpg" alt="Image 6" style={{ height: '350px' }} />
        <img src="Course offering faculty.jpg" alt="Image 7" style={{ height: '350px' }} />
        <img src="Course offering faculty.jpg" alt="Image 8" style={{ height: '350px' }} />
      </Carousel>
    </div>
  );
};

export default ElasticCarousel;
