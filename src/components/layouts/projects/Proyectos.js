import React, { useState, useEffect } from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import { Play } from 'lucide-react';
import proyectos from '../../../assets/json/proyectos';
import filtro from '../../../assets/img/proyectos/filtro.svg';
import right from '../../../assets/img/proyectos/right.svg';
import left from '../../../assets/img/proyectos/left.svg';
import '.././../../assets/css/proyectos.css'

function Proyectos() {
  // Variables de estado
  const [categoriaActual, setCategoriaActual] = useState(0); // Índice de la categoría actual
  const [mostrarFiltro, setMostrarFiltro] = useState(false); // Controla la visibilidad del filtro
  const [proyectoActual, setProyectoActual] = useState(0); // Índice del proyecto actual
  const [showModal, setShowModal] = useState(false); // Controla la visibilidad del modal

  // Función para abrir el modal
  const handleModalClick = () => {
    setShowModal(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Efecto para establecer la categoría inicial a "Construcción de paz"
  useEffect(() => {
    const indexConstruccionPaz = proyectos.categorias.findIndex(
      (categoria) => categoria.nombre === 'Construcción de paz'
    );
    if (indexConstruccionPaz !== -1) {
      setCategoriaActual(indexConstruccionPaz);
    }
  }, []);

  // Función para cambiar la categoría actual
  const cambiarCategoria = (index) => {
    if (categoriaActual === index) {
      setMostrarFiltro(!mostrarFiltro);
    } else {
      setCategoriaActual(index);
      setMostrarFiltro(false);
      setProyectoActual(0);
    }
  };

  // Función para pasar al siguiente proyecto
  const siguienteProyecto = () => {
    setProyectoActual(
      (prev) =>
        (prev + 1) % proyectos.categorias[categoriaActual].proyectos.length
    );
  };

  // Función para volver al proyecto anterior
  const anteriorProyecto = () => {
    setProyectoActual(
      (prev) =>
        (prev - 1 + proyectos.categorias[categoriaActual].proyectos.length) %
        proyectos.categorias[categoriaActual].proyectos.length
    );
  };

  return (
    <div>
      <Header />

      <main className="container mx-auto px-4 py-8 mt-[32px] mb-[72px]">
        {/* Sección de filtro de categorías */}
        <div className="flex flex-col md:flex-row items-center relative py-4">
          {/* Botón para mostrar/ocultar el filtro */}
          <button
            onClick={() => setMostrarFiltro(!mostrarFiltro)}
            className="flex items-center px-4 py-8 rounded mb-4 md:mb-0"
          >
            <img src={filtro} alt="Filtro" className="mr-2 h-8 w-auto" />
          </button>
          {/* Muestra el nombre de la categoría actual */}
          {categoriaActual !== null && (
            <span className='font-semibold text-xl md:text-2xl'>
              {proyectos.categorias[categoriaActual].nombre}
            </span>
          )}

          {/* Menú desplegable de filtro */}
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

        {/* Sección de visualización del proyecto */}
        {categoriaActual !== null && (
          <div className="project-container">
            <div className="flex flex-col md:flex-row items-start mx-8">
              {/* Contenedor de texto con título, descripción y navegación */}
              <div className="text-container md:w-2/3 p-4 relative">
                <h2 className="project-title text-2xl md:text-4xl font-semibold mb-4 text-custom-blue-2 font-poppins font-extrabold">
                  {proyectos.categorias[categoriaActual].proyectos[proyectoActual].titulo}
                </h2>
                <p className="project-description text-gray-900 mb-4 text-base md:text-lg">
                  {proyectos.categorias[categoriaActual].proyectos[proyectoActual].descripcion}
                </p>
                {/* Botones de navegación entre proyectos */}
                <div className="flex justify-center mt-8 bottom-8">
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
              </div>

              {/* Contenedor de imagen con botón de reproducción */}
              <div className="image-container md:w-1/3 relative">
                <img
                  src={proyectos.categorias[categoriaActual].proyectos[proyectoActual].imagenes[0]}
                  alt={proyectos.categorias[categoriaActual].proyectos[proyectoActual].titulo}
                  className="w-full h-auto object-cover"
                />
                {/* Botón de reproducción para abrir el modal */}
                <button className="absolute top-4 right-4 bg-custom-blue-2 rounded-full p-2 shadow-md" onClick={handleModalClick}>
                  <Play size={16} className="text-white fill-current" />
                </button>

                {/* Modal para mostrar el contenido de Genially */}
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

            {/* Líneas decorativas */}
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