import React, { useState, useEffect, useCallback } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import cemab from '../../../../assets/img/inicio/carouselCEMAB.svg';
import capaz from '../../../../assets/img/inicio/carouselCAPAZ.svg';
import adultez from '../../../../assets/img/inicio/carouselADULTEZ.svg';
import photoboy from '../../../../assets/img/inicio/carouselPHOTOBOY.svg';
import iuma from '../../../../assets/img/inicio/carouselIUMA.svg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [geniallyUrl, setGeniallyUrl] = useState('');

  const carouselItems = [
    { image: cemab, alt: 'CEMAB', genially: "https://view.genially.com/66a3d646e0c64b0109e7d319" },
    { image: capaz, alt: 'CAPAZ', genially: "https://view.genially.com/66a3b0b1298c760bb31d63c3" },
    { image: adultez, alt: 'ADULTEZ', genially: "https://view.genially.com/66a50423a8ea2c4e38c75d55" },
    { image: photoboy, alt: 'PHOTOBOY', genially: "https://view.genially.com/66a3cc06dc65a63cdfc1dc5a" },
    { image: iuma, alt: 'IUMA', genially: "https://view.genially.com/66a3c299e0c64b0109da4c30" },
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
    const radius = 400;
    const centerScale = 0.9;
    const minScale = 0.7;

    return {
      x: radius * Math.sin(theta),
      scale: centerScale - (1 - Math.cos(theta)) * (centerScale - minScale) / 2,
      opacity: Math.cos(theta) * 0.5 + 0.5,
    };
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handleModalClick = (geniallyUrl) => {
    setGeniallyUrl(geniallyUrl);
    setShowModal(true);
  };

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  // Nuevo efecto para manejar el cierre del modal con la tecla Esc
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    if (showModal) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [showModal, handleCloseModal]);

  // Función para manejar clics fuera del modal
  const handleOutsideClick = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      handleCloseModal();
    }
  };

  return (
    <div className="relative w-full h-[620px] overflow-hidden">
      <div className="absolute w-full h-full left-1/2 top-1/2 -translate-y-1/2">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-500 ease-in-out ${
              index === currentIndex ? 'z-10' : 'z-0'
            }`}
            style={{
              transform: `translateX(-50%) translateX(${getItemPosition(index).x}px) scale(${getItemPosition(index).scale})`,
              opacity: getItemPosition(index).opacity,
            }}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.alt}
                className="w-auto h-[500px] object-cover rounded-lg cursor-pointer"
                onClick={() => handleModalClick(item.genially)}
              />
              <button
                className="absolute top-4 right-4 animate-pulse bg-custom-blue-2 rounded-full p-2 shadow-md"
                onClick={() => handleModalClick(item.genially)}
              >
                <Play size={24} className="text-white pulse fill-current" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button onClick={handlePrev} className="text-black">
          <ChevronLeft size={24} />
        </button>
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-custom-blue-2' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
        <button onClick={handleNext} className="text-black">
          <ChevronRight size={24} />
        </button>
      </div>

      {showModal && (
        <div 
          className="fixed inset-0 flex bg-gray-900 bg-opacity-50 justify-center items-center z-50 modal-overlay"
          onClick={handleOutsideClick}
        >
          <div className="p-4 rounded-lg  w-11/12 h-5/6">
            <div className="h-full">
              <button
                className="float-right bg-red-600 text-white font-semibold my-1 px-3 py-1 rounded-lg hover:bg-red-700"
                onClick={handleCloseModal}
              >
                Cerrar
              </button>
              <iframe
                title="Porfolio científicamente"
                src={geniallyUrl}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;