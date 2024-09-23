import React, { useState } from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import estudiantes from '../../../assets/img/inicio/estudiantes.jpeg'
import legitimidad from '../../../assets/img/inicio/legitimidad.jpg'
import semillero2 from '../../../assets/img/inicio/semillero2.svg'
import delfin from '../../../assets/img/inicio/delfin.jpeg'
import encuentro from '../../../assets/img/inicio/encuentro.png'
import tecnoparque from '../../../assets/img/inicio/tecnoparque.svg'
import resinas from '../../../assets/img/inicio/resinas.svg'
import Carousel from './carousel/Carousel';

function Inicio() {
  const smallArticles = [
    {
      title: "La legitimidad, factor determinante en el proceso de paz",
      date: "31 Julio, 2024",
      link: "https://www.ucp.edu.co",
      image: legitimidad,
      url: 'https://www.ucp.edu.co/noticias/la-legitimidad-factor-determinante-en-el-proceso-de-paz/'
    },
    {
      title: "Programa Delfín entrega reconocimiento a la Universidad",
      date: "23 Julio, 2024",
      link: "https://www.ucp.edu.co",
      image: delfin,
      url: 'https://www.ucp.edu.co/noticias/programa-delfin-entrega-reconocimiento-a-la-universidad/'
    },
    {
      title: "La Católica presente en el XIV Encuentro Departamental de Semilleros – RREDSI",
      date: "6 Junio, 2024",
      link: "https://www.ucp.edu.co",
      image: encuentro,
      url: 'https://www.ucp.edu.co/noticias/la-catolica-presente-en-el-xiv-encuentro-departamental-de-semilleros-rredsi/'
    }
  ];

  const [showPortfolio, setShowPortfolio] = useState(false);

  const handlePortfolioClick = () => {
    setShowPortfolio(true);
  };

  const handleClosePortfolio = () => {
    setShowPortfolio(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="flex flex-col lg:flex-row my-4 sm:my-6 lg:my-8 px-4 sm:px-6 lg:px-8">
          <div className="w-full lg:w-3/4 mb-6 lg:mb-0">
            <article className="p-4 lg:p-6 rounded-lg">
              <a href='https://www.ucp.edu.co/noticias/estudiantes-internacionales-visitan-la-universidad-por-el-programa-delfin/' target='_blank' rel="noopener noreferrer" className="block mb-4">
                <img src={estudiantes} alt="Verano de investigación" className="w-full h-auto object-cover rounded" />
              </a>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Estudiantes Internacionales visitan la Universidad por el programa Delfín</h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                La Universidad recibe la visita de estudiantes mexicanas que llevan a cabo su estancia de investigación en el marco del Programa Delfín desarrollando o participando de proyectos en diversas disciplinas.
              </p>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                Es de anotar que el programa Delfín se lidera desde la Dirección de Investigaciones e Innovación con el fin de permitir a los participantes desarrollar proyectos de investigación, aprender sobre la cultura local y realizar trabajo de campo en el contexto regional.
              </p>
              <div className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                31 Julio, 2024 <a href="https://www.ucp.edu.co" className="text-blue-600 hover:underline">Universidad Católica de Pereira</a>
              </div>
              <a href='https://www.ucp.edu.co/2024/?Investigaciones=1' target='_blank' rel="noopener noreferrer" className='bg-custom-blue hover:bg-custom-blue-2 rounded font-semibold px-4 sm:px-6 py-2 sm:py-3 text-white inline-block mt-2 sm:mt-4 text-sm sm:text-base transition duration-300'> Ver más noticias ➜</a>
            </article>
          </div>

          <div className="w-full lg:w-1/4 border-t-2 lg:border-t-0 lg:border-l-2 border-black pt-6 lg:pt-0 lg:pl-6">
            {smallArticles.map((article, index) => (
              <article key={index} className="mb-6 last:mb-0">
                <a href={article.url} target='_blank' rel="noopener noreferrer" className="block mb-2">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full max-h-48 object-cover rounded"
                  />
                </a>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{article.title}</h3>
                <div className="text-xs text-gray-500">
                  {article.date} <a href={article.link} className="text-blue-600 hover:underline">Universidad Católica de Pereira</a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="bg-custom-blue-2 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 text-white">
              <h5 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">"Buscamos promover el diálogo e intercambio de saberes"</h5>
            </div>
            <div className="w-full lg:w-1/2 text-white">
              <p className="text-sm sm:text-base lg:text-lg">En este espacio perseguimos el objetivo de realizar divulgación pública del saber científico a través de la sistematización de experiencias y resultados que consideramos de valor para participantes, beneficiarios y públicos relacionados con nuestros proyectos en 5 focos estratégicos.</p>
            </div>
          </div>
        </div>

        <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 font-poppins">Contamos 7 grupos de investigación y con 8 semilleros</h2>
              <p className="text-sm sm:text-base">Te invitamos a que conozcas nuestro portafolio</p>
              <button
                className="bg-custom-blue-2 text-white px-4 py-2 text-sm sm:text-base m-4 sm:m-8 rounded-lg inline-block hover:bg-custom-blue transition duration-300"
                onClick={handlePortfolioClick}
              >
                <span className="border-b border-white">Da clic aquí</span>
              </button>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <img src={semillero2} alt="About Company" className="w-full h-auto object-contain max-w-xl" />
            </div>
          </div>
        </div>

        {showPortfolio && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 overflow-y-auto">
            <div className="bg-white p-4 rounded-lg w-full h-full sm:w-11/12 sm:h-5/6 relative">
              <button
                className="absolute top-2 right-2 bg-red-600 text-white font-semibold px-3 py-1 rounded-lg hover:bg-red-700 text-sm transition duration-300"
                onClick={handleClosePortfolio}
              >
                Cerrar
              </button>
              <iframe
                title="Portafolio científicamente"
                src="https://view.genially.com/66a2d64888a98a4fcae8dddf"
                className="w-full h-full mt-8"
                allowFullScreen
              />
            </div>
          </div>
        )}

        <div className="bg-custom-blue my-4 py-4 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center items-center text-center">
          <h1 className='text-white text-xl sm:text-2xl lg:text-3xl font-semibold font-poppins mb-2 sm:mb-0'>
            <span className="relative inline-block"> Ultimas investigaciones </span>
          </h1>
          <span className="hidden sm:inline-block text-white px-2 sm:px-4">●</span>
          <span className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold font-poppins">Ultimas investigaciones</span>
        </div>

        <Carousel />

        <div className="pb-8 px-4 sm:px-6 lg:px-8 border-t border-t-custom-blue-2 border-t-4 mx-4 sm:mx-8 rounded">
          <p className='font-semibold text-2xl sm:text-3xl lg:text-4xl py-4'>Nuestros aliados</p>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center">
            <div className="w-full sm:w-1/2 mb-6 sm:mb-0 flex justify-center">
              <img src={resinas} alt="Distri Resinas" className="w-full max-w-xs sm:max-w-md h-auto object-contain" />
            </div>
            <div className="w-full sm:w-1/2 flex justify-center">
              <img src={tecnoparque} alt="Tecnoparque SENA" className="w-full max-w-xs sm:max-w-md h-auto object-contain" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Inicio;