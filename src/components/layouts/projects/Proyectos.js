import React, { useEffect, useRef } from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import { Play, ChevronDown } from 'lucide-react';
import useProjects from '../../hooks/useProjects';
import right from '../../../assets/img/proyectos/right.svg';
import left from '../../../assets/img/proyectos/left.svg';
import '.././../../assets/css/proyectos.css';

function Proyectos() {
  const {
    categoriaActual,
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

      <main className="container mx-auto px-4 mb-[72px]">
        <div className="flex flex-col items-start relative py-4 mt-4">
          <label htmlFor="categoria-select" className="text-custom-blue-2 font-semibold mb-2">
            Categoria:
          </label>
          <div className="relative w-full md:w-auto">
            <select
              id="categoria-select"
              value={categoriaActual}
              onChange={(e) => cambiarCategoria(Number(e.target.value))}
              className="w-full md:w-auto px-4 py-2 pr-10 rounded cursor-pointer border border-custom-blue-2 border-2 focus:outline-none focus:ring-2 focus:ring-custom-blue-2 appearance-none"
            >
              {proyectos.categorias.map((categoria, index) => (
                <option key={index} value={index}>
                  {categoria.nombre}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-custom-blue-2">
              <ChevronDown size={24} />
            </div>
          </div>
        </div>

        {categoriaActual !== null && (
          <div className="project-container">
            <div className="flex flex-col md:flex-row items-start mx-8">
              <div className="project-text-container md:w-2/3 p-4 relative flex flex-col">
                <div className="flex-grow">
                  <h2 className="project-title text-2xl md:text-4xl font-semibold mb-4 text-custom-blue-2 pt-12 font-poppins font-extrabold">
                    {proyectos.categorias[categoriaActual].proyectos[proyectoActual].titulo}
                  </h2>
                  <p className="project-description text-gray-900 mb-4 text-base md:text-lg">
                    {proyectos.categorias[categoriaActual].proyectos[proyectoActual].descripcion}
                  </p>
                </div>
                {cantidadProyectos > 1 && (
                  <div className="navigation-arrows">
                    <button onClick={anteriorProyecto} className="mr-4">
                      <img src={left} className="h-8 w-auto" alt="Anterior" />
                    </button>
                    <button onClick={siguienteProyecto}>
                      <img src={right} className="h-8 w-auto" alt="Siguiente" />
                    </button>
                  </div>
                )}
              </div>
          
              <div className="project-image-container md:w-1/3">
                <img
                  src={proyectos.categorias[categoriaActual].proyectos[proyectoActual].imagenes[0]}
                  alt={proyectos.categorias[categoriaActual].proyectos[proyectoActual].titulo}
                  className="w-full h-auto object-contain cursor-pointer"
                  onClick={toggleModal}
                />
                <button className="absolute top-6 right-2 bg-custom-blue-2 rounded-full p-2 shadow-md" onClick={toggleModal}>
                  <Play size={16} className="text-white fill-current" />
                </button>
              </div>
            </div>
          
            <div className="project-line-horizontal-top"></div>
            <div className="project-line-vertical"></div>
            <div className="project-line-horizontal-bottom"></div>
          </div>
        )}

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
      </main>

      <Footer />
    </div>
  );
}

export default Proyectos;