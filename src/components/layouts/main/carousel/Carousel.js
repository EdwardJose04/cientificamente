import React, { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import cemab from '../../../../assets/img/inicio/carouselCEMAB.svg';
import capaz from '../../../../assets/img/inicio/carouselCAPAZ.svg';
import adultez from '../../../../assets/img/inicio/carouselADULTEZ.svg';
import photoboy from '../../../../assets/img/inicio/carouselPHOTOBOY.svg';
import iuma from '../../../../assets/img/inicio/carouselIUMA.svg';

// Componente principal del carrusel
const Carousel = () => {
  // Estado para manejar el índice actual del carrusel
  const [currentIndex, setCurrentIndex] = useState(0);
  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(false);
  // Estado para almacenar la URL del contenido Genially
  const [geniallyUrl, setGeniallyUrl] = useState('');

  // Array de objetos con la información de cada elemento del carrusel
  const carouselItems = [
    { image: cemab, alt: 'CEMAB', genially: "" },
    { image: capaz, alt: 'CAPAZ', genially: "" },
    { image: adultez, alt: 'ADULTEZ', genially: "" },
    { image: photoboy, alt: 'PHOTOBOY', genially: "" },
    { image: iuma, alt: 'IUMA', genially: "" },
  ];

  const totalItems = carouselItems.length;

  // Efecto para cambiar automáticamente la imagen cada 3 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 3000);
    return () => clearInterval(timer);
  }, [totalItems]);

  // Función para calcular la posición y escala de cada elemento del carrusel
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

  // Funciones para manejar la navegación del carrusel
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  // Función para abrir el modal con el contenido Genially
  const handleModalClick = (geniallyUrl) => {
    setGeniallyUrl(geniallyUrl);
    setShowModal(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative w-full h-[620px] overflow-hidden">
      {/* Contenedor de los elementos del carrusel */}
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
                className="w-auto h-[500px] object-cover rounded-lg"
              />
              <button
                className="absolute top-4 right-4 bg-custom-blue-2 rounded-full p-2 shadow-md"
                onClick={() => handleModalClick(item.genially)}
              >
                <Play size={24} className="text-white fill-current" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Controles de navegación del carrusel */}
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

      {/* Modal para mostrar el contenido Genially */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="p-4 rounded-lg w-11/12 h-5/6">
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