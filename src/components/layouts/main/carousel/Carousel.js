import React, { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import cemab from '../../../../assets/img/inicio/carouselCEMAB.svg';
import capaz from '../../../../assets/img/inicio/carouselCAPAZ.svg';
import adultez from '../../../../assets/img/inicio/carouselADULTEZ.svg';
import photoboy from '../../../../assets/img/inicio/carouselPHOTOBOY.svg';
import iuma from '../../../../assets/img/inicio/carouselIUMA.svg';

const CarouselItem = ({ image, alt, position, isCenter }) => (
  <div className={`absolute transition-all duration-500 ease-in-out ${isCenter ? 'z-10' : 'z-0'}`} 
       style={{
         transform: `translateX(-50%) translateX(${position.x}px) scale(${position.scale})`,
         opacity: position.opacity,
       }}>
    <div className="relative">
      <img 
        src={image} 
        alt={alt} 
        className="w-auto h-[500px] object-cover rounded-lg"
      />
      <button className="absolute top-4 right-4 bg-custom-blue-2 rounded-full p-2 shadow-md">
        <Play size={24} className="text-white fill-current" />
      </button>
    </div>
  </div>
);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = [
    { image: cemab, alt: 'CEMAB' },
    { image: capaz, alt: 'CAPAZ' },
    { image: adultez, alt: 'ADULTEZ' },
    { image: photoboy, alt: 'PHOTOBOY' },
    { image: iuma, alt: 'IUMA' },
  ];

  const totalItems = carouselItems.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 3000);
    return () => clearInterval(timer);
  }, [totalItems]);

  const getItemPosition = (index) => {
    const theta = ((index - currentIndex + totalItems) % totalItems) / totalItems * Math.PI * 2;
    const radius = 400; // Reduced radius for less separation
    const centerScale = 0.9; // Slightly reduced center scale
    const minScale = 0.7; // Increased minimum scale

    return {
      x: radius * Math.sin(theta),
      scale: centerScale - (1 - Math.cos(theta)) * (centerScale - minScale) / 2,
      opacity: Math.cos(theta) * 0.5 + 0.5, // Adjusted opacity calculation
    };
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  return (
    <div className="relative w-full h-[620px] overflow-hidden">
      <div className="absolute w-full h-full left-1/2 top-1/2 -translate-y-1/2">
        {carouselItems.map((item, index) => (
          <CarouselItem 
            key={index} 
            {...item} 
            position={getItemPosition(index)}
            isCenter={index === currentIndex}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button onClick={handlePrev} className="text-black">
          <ChevronLeft size={24} />
        </button>
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
        <button onClick={handleNext} className="text-black">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;