import React, { useEffect, useRef } from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import { Play } from 'lucide-react';
import useProjects from '../../hooks/useProjects';
import filtro from '../../../assets/img/proyectos/filtro.svg';
import right from '../../../assets/img/proyectos/right.svg';
import left from '../../../assets/img/proyectos/left.svg';
import '.././../../assets/css/proyectos.css';

function Proyectos() {
  const {
    categoriaActual,
    mostrarFiltro,
    proyectoActual,
    showModal,
    cambiarCategoria,
    siguienteProyecto,
    anteriorProyecto,
    toggleModal,
    cantidadProyectos,
    proyectos
  } = useProjects();

  const modalRef = useRef(null);

  useEffect(() => {
    document.title = "Proyectos | Cientifica Mente";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        toggleModal();
      }
    };

    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        toggleModal();
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [showModal, toggleModal]);

  return (
    <div>
      <Header />

      <main className="container mx-auto px-4 py-8 mb-[72px]">
        <div className="flex flex-col md:flex-row items-center relative py-4">
          <button
            onClick={() => cambiarCategoria(categoriaActual)}
            className="flex items-center px-4 py-8 rounded mb-4 md:mb-0"
          >
            <img src={filtro} alt="Filtro" className="mr-2 h-8 w-auto" />
          </button>
          {categoriaActual !== null && ( 
            <span className='font-semibold text-xl md:text-2xl'>
              {proyectos.categorias[categoriaActual].nombre}
            </span>
          )}

          {mostrarFiltro && (
            <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded p-2 z-50">
              {proyectos.categorias.map((categoria, index) => (
                <button
                  key={index}
                  onClick={() => cambiarCategoria(index)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {categoria.nombre}
                </button>
              ))}
            </div>
          )}
        </div>

        {categoriaActual !== null && (
          <div className="project-container">
            <div className="flex flex-col md:flex-row items-start mx-8">
              <div className="text-container md:w-2/3 p-4 relative flex flex-col">
                <div className="flex-grow">
                  <h2 className="project-title text-2xl md:text-4xl font-semibold mb-4 text-custom-blue-2 pt-12 font-poppins font-extrabold">
                    {proyectos.categorias[categoriaActual].proyectos[proyectoActual].titulo}
                  </h2>
                  <p className="project-description text-gray-900 mb-4 text-base md:text-lg">
                    {proyectos.categorias[categoriaActual].proyectos[proyectoActual].descripcion}
                  </p>
                </div>
                {cantidadProyectos > 1 && (
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={anteriorProyecto}
                      className="mr-4"
                    >
                      <img src={left} className='h-8 w-auto' alt="Anterior" />
                    </button>
                    <button
                      onClick={siguienteProyecto}
                    >
                      <img src={right} className='h-8 w-auto' alt="Siguiente" />
                    </button>
                  </div>
                )}
              </div>

              <div className="image-container md:w-1/3 relative">
                <img
                  src={proyectos.categorias[categoriaActual].proyectos[proyectoActual].imagenes[0]}
                  alt={proyectos.categorias[categoriaActual].proyectos[proyectoActual].titulo}
                  className="w-full h-auto object-cover"
                />
                <button className="absolute top-8 right-4 animate-pulse bg-custom-blue-2 rounded-full p-2 shadow-md" onClick={toggleModal}>
                  <Play size={16} className="text-white fill-current" />
                </button>

                {showModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div ref={modalRef} className="p-4 rounded-lg w-11/12 h-5/6">
                      <div className="h-full">
                        <button
                          className="float-right bg-red-600 text-white font-semibold my-1 px-3 py-1 rounded-lg hover:bg-red-700"
                          onClick={toggleModal}
                        >
                          Cerrar
                        </button>
                        <iframe
                          title="Porfolio científicamente"
                          src={proyectos.categorias[categoriaActual].proyectos[proyectoActual].genially}
                          className="w-full h-full"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="line-horizontal-top"></div>
            <div className="line-vertical"></div>
            <div className="line-horizontal-bottom"></div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Proyectos;
