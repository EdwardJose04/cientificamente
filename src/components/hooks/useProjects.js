import { useState, useEffect, useCallback } from 'react';
import proyectos from '../../assets/json/proyectos'

const useProjects = () => {
  const [categoriaActual, setCategoriaActual] = useState(0);
  const [mostrarFiltro, setMostrarFiltro] = useState(false);
  const [proyectoActual, setProyectoActual] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const indexConstruccionPaz = proyectos.categorias.findIndex(
      (categoria) => categoria.nombre === 'Construcción de paz'
    );
    if (indexConstruccionPaz !== -1) {
      setCategoriaActual(indexConstruccionPaz);
    }
  }, []);

  const cambiarCategoria = (index) => {
    if (categoriaActual === index) {
      setMostrarFiltro(!mostrarFiltro);
    } else {
      setCategoriaActual(index);
      setMostrarFiltro(false);
      setProyectoActual(0);
    }
  };

  const siguienteProyecto = () => {
    setProyectoActual(
      (prev) =>
        (prev + 1) % proyectos.categorias[categoriaActual].proyectos.length
    );
  };

  const anteriorProyecto = () => {
    setProyectoActual(
      (prev) =>
        (prev - 1 + proyectos.categorias[categoriaActual].proyectos.length) %
        proyectos.categorias[categoriaActual].proyectos.length
    );
  };

  const toggleModal = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const cantidadProyectos = categoriaActual !== null
    ? proyectos.categorias[categoriaActual].proyectos.length
    : 0;

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (showModal) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [showModal, closeModal]);

  return {
    categoriaActual,
    mostrarFiltro,
    proyectoActual,
    showModal,
    cambiarCategoria,
    siguienteProyecto,
    anteriorProyecto,
    toggleModal,
    closeModal,
    cantidadProyectos,
    proyectos
  };
};

export default useProjects;