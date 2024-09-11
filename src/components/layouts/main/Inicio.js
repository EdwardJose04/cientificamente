import React, { useState } from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import verano from '../../../assets/img/inicio/verano.svg'
import semillero from '../../../assets/img/inicio/semillero.svg'
import semillero2 from '../../../assets/img/inicio/semillero2.svg'
import encuentro from '../../../assets/img/inicio/encuentroregional.svg'
import minciencias from '../../../assets/img/inicio/minciencias.svg'
import tecnoparque from '../../../assets/img/inicio/tecnoparque.svg'
import resinas from '../../../assets/img/inicio/resinas.svg'
import Carousel from './carousel/Carousel';

function Inicio() {
  // Array de artículos pequeños para la barra lateral
  const smallArticles = [
    {
      title: "Semillero Coders obtiene primer puesto en UTP Open 2023",
      date: "27 Noviembre, 2023",
      link: "https://www.ucp.edu.co",
      image: semillero
    },
    {
      title: "Encuentro Regional de Semilleros de Investigación",
      date: "27 Octubre, 2023",
      link: "https://www.ucp.edu.co",
      image: encuentro
    },
    {
      title: "Minciencias aprueba proyecto de investigación",
      date: "20 Noviembre, 2023",
      link: "https://www.ucp.edu.co",
      image: minciencias
    }
  ];

  // Estado para controlar la visibilidad del modal del portafolio
  const [showPortfolio, setShowPortfolio] = useState(false);

  // Funciones para manejar la apertura y cierre del modal del portafolio
  const handlePortfolioClick = () => {
    setShowPortfolio(true);
  };

  const handleClosePortfolio = () => {
    setShowPortfolio(false);
  };

  return (
    <div>
      <Header />
      <main className="flex flex-col md:flex-row my-8">
        {/* Contenido principal */}
        <div className="w-full md:w-3/4 px-4 md:px-8 mb-8 md:mb-0">
          <article className="p-6 rounded-lg">
            <img src={verano} alt="Verano de investigación" className="w-full h-auto object-cover mb-4 rounded" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Verano de investigación</h2>
            <p className="text-gray-700 mb-4">
              Con la participación de cerca de 50 estudiantes y docentes, la Universidad realiza el verano de investigación que busca fortalecer las capacidades para la consecución de recursos de co-financiación de proyectos.
            </p>
            <div className="text-sm text-gray-500">
              19 Julio, 2023 <a href="https://www.ucp.edu.co" className="text-blue-600 hover:underline">Universidad Católica de Pereira</a>
            </div>
          </article>
        </div>

        {/* Artículos pequeños en la barra lateral */}
        <div className="w-full md:w-1/4 border-t-2 md:border-t-0 md:border-l-2 border-black pt-8 md:pt-0 md:pl-8 px-4 md:px-0">
          {smallArticles.map((article, index) => (
            <article key={index} className="mb-6 last:mb-0">
              <img src={article.image} alt={article.title} className="w-full h-auto object-cover mb-2 rounded" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">{article.title}</h3>
              <div className="text-xs text-gray-500">
                {article.date} <a href={article.link} className="text-blue-600 hover:underline">Universidad Católica de Pereira</a>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Sección 2: Cita y descripción */}
      <div className="bg-custom-blue-2 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 text-white">
            <h5 className="text-3xl md:text-3xl lg:text-4xl font-semibold">"Buscamos promover el diálogo e intercambio de saberes"</h5>
          </div>
          <div className="w-full md:w-1/2 text-white">
            <p className="text-base md:text-lg">En este espacio perseguimos el objetivo de realizar divulgación pública del saber científico a través de la sistematización de experiencias y resultados que consideramos de valor para participantes, beneficiarios y públicos relacionados con nuestros proyectos en 5 focos estratégicos.</p>
          </div>
        </div>
      </div>

      {/* Sección 3: Información sobre grupos de investigación y semilleros */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-poppins">Contamos 7 grupos de investigación y con 8 semilleros</h2>
            <p>Te invitamos a que conozcas nuestro portafolio</p>
            <button
              className="bg-custom-blue-2 text-white px-2 py-1 text-sm m-8 rounded-lg inline-block hover:bg-custom-blue"
              onClick={handlePortfolioClick}
            >
              <span className="border-b border-white">Da clic aquí</span>
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src={semillero2} alt="About Company" className="w-full h-auto object-contain max-w-xl" />
          </div>
        </div>
      </div>

      {/* Modal del Portafolio */}
      {showPortfolio && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="p-4 rounded-lg w-11/12 h-5/6">
            <div className="h-full">
              <button
                className="float-right bg-red-600 text-white font-semibold my-1 px-3 py-1 rounded-lg hover:bg-red-700"
                onClick={handleClosePortfolio}
              >
                Cerrar
              </button>
              <iframe
                title="Portafolio científicamente"
                src="https://view.genially.com/66a2d64888a98a4fcae8dddf"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Sección 4: Título de últimas investigaciones */}
      <div className="bg-custom-blue my-4 py-2 px-4 sm:px-6 lg:px-8 flex justify-center items-center text-center relative">
        <h1 className='text-white text-3xl md:text-4xl font-semibold font-poppins'>
          <span className="relative inline-block"> Ultimas investigaciones </span>
          <span className="px-4">  ●</span>
          <span className="inline-block ml-4">Ultimas investigaciones</span>
        </h1>
      </div>

      {/* Carrusel de investigaciones */}
      <Carousel />

      {/* Sección de Aliados */}
      <div className="pb-8 px-4 sm:px-6 lg:px-8 border-t border-t-custom-blue-2 border-t-4 mx-8 rounded">
        <p className='font-semibold text-3xl sm:text-3xl md:text-4xl py-4'>Nuestros aliados</p>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1-2 mb-8 md:mb-0 flex justify-center">
            <img src={resinas} alt="Distri Resinas" className="w-full max-w-md h-auto object-contain" />
          </div>
          <div className="w-full md:w-1-2 flex justify-center">
            <img src={tecnoparque} alt="Tecnoparque SENA" className="w-full max-w-md h-auto object-contain" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Inicio;