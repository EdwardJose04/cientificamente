import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoCMblanco from '../../assets/img/logos/logoCMblanco.svg'
import logoUCPblanco from '../../assets/img/logos/logoUCPblanco.svg'

function Header() {
  // Estado para controlar la apertura/cierre del menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Estado para controlar si se ha hecho scroll
  const [isScrolled, setIsScrolled] = useState(false)

  // Efecto para manejar el evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Limpieza del event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Componente para el botón de menú
  const MenuButton = () => (
    <button 
      className="md:hidden z-50"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {isMenuOpen ? (
        // Icono de cerrar
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        // Icono de menú
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>
  )

  return (
    <>
      {/* Header original (siempre visible) */}
      <header className="bg-custom-blue text-white shadow-md font-poppins py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo principal */}
          <Link to="/inicio" className="flex-shrink-0">
            <img src={logoCMblanco} alt="Logo Cientifica Mente" className="h-12 sm:h-12 md:h-14 w-auto" />
          </Link>

          <MenuButton />

          {/* Navegación para pantallas grandes */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {/* Enlaces de navegación */}
              <Link to="/sobre-nosotros">
                <li className="hover:text-black hover:bg-white hover:rounded-full hover:py-2 px-5 font-semibold">¿Quiénes somos?</li>
              </Link>
              <li className="h-8 border-l border-white"></li>
              <Link to="/proyectos">
                <li className="hover:text-black hover:bg-white hover:rounded-full hover:py-2 px-5 font-semibold">Proyectos</li>
              </Link>
              <li className="h-8 border-l border-white"></li>
              <Link to="/contacto">
                <li className="hover:text-black hover:bg-white hover:rounded-full hover:py-2 px-5 font-semibold">Contacto</li>
              </Link>
            </ul>
          </nav>

          {/* Logo UCP */}
          <a href="https://www.ucp.edu.co" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 md:block">
            <img src={logoUCPblanco} alt="Logo UCP" className="h-14 sm:h-14 md:h-16 w-auto" />
          </a>
        </div>
      </header>

      {/* Header que aparece al hacer scroll */}
      <header className={`bg-custom-blue text-white shadow-md font-poppins fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-in-out py-2 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo principal */}
          <Link to="/inicio" className="flex-shrink-0">
            <img src={logoCMblanco} alt="Logo Cientifica Mente" className="h-10 w-auto" />
          </Link>

          <MenuButton />

          {/* Navegación para pantallas grandes */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {/* Enlaces de navegación */}
              <Link to="/sobre-nosotros">
                <li className="hover:text-black hover:bg-white hover:rounded-full hover:py-2 px-4 font-semibold">¿Quienes somos?</li>
              </Link>
              <li className="h-6 border-l border-white"></li>
              <Link to="/proyectos">
                <li className="hover:text-black hover:bg-white hover:rounded-full hover:py-2 px-4 font-semibold">Proyectos</li>
              </Link>
              <li className="h-6 border-l border-white"></li>
              <Link to="/contacto">
                <li className="hover:text-black hover:bg-white hover:rounded-full hover:py-2 px-4 font-semibold">Contacto</li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>

      {/* Menú móvil a pantalla completa */}
      <div className={`fixed inset-0 bg-custom-blue z-40 flex flex-col justify-between items-center transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="w-full pt-20">
          <ul className="flex flex-col items-center space-y-8">
            {/* Enlaces de navegación móvil */}
            <Link to="/sobre-nosotros" onClick={() => setIsMenuOpen(false)}>
              <li className="text-xl hover:text-gray-200 text-white font-semibold">¿Quienes somos?</li>
            </Link>
            <Link to="/proyectos" onClick={() => setIsMenuOpen(false)}>
              <li className="text-xl hover:text-gray-200 text-white font-semibold">Proyectos</li>
            </Link>
            <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
              <li className="text-xl hover:text-gray-200 text-white font-semibold">Contacto</li>
            </Link>
          </ul>
        </nav>
        <img src={logoCMblanco} alt="Logo Cientifica Mente" className="h-16 w-auto mb-10" />
      </div>
    </>
  );
};

export default Header