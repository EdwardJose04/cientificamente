import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logoCMblanco from '../../assets/img/logos/logoCMblanco.svg'
import logoUCPblanco from '../../assets/img/logos/logoUCPblanco.svg'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-custom-blue text-white py-4 shadow-md font-poppins">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <img src={logoCMblanco} alt="Logo Cientifica Mente" className="h-10 sm:h-12 md:h-14 w-auto" />
        </Link>

        {/* Hamburger menu for mobile */}
        <button 
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Navigation for larger screens */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6">
            <Link to="/sobre-nosotros">
              <li className="hover:text-gray-200 px-5 font-semibold">¿Quienes somos?</li>          
            </Link>            
            <li className="h-5 border-l border-white"></li>
            <Link to="/proyectos">
              <li className="hover:text-gray-200 px-5 font-semibold">Proyectos</li>          
            </Link>            
            <li className="h-5 border-l border-white"></li>
            <Link to="/contacto">
              <li className="hover:text-gray-200 px-5 font-semibold">Contacto</li>
            </Link>
          </ul>
        </nav>

        <a href="https://www.ucp.edu.co" target="_blank" rel="noopener noreferrer" className="hidden sm:block flex-shrink-0">
          <img src={logoUCPblanco} alt="Logo UCP" className="h-10 sm:h-12 md:h-14 w-auto" />
        </a>
      </div>

      {/* Full-screen mobile menu */}
      <div className={`fixed inset-0 bg-custom-blue z-40 flex flex-col justify-between items-center transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="w-full pt-20">
          <ul className="flex flex-col items-center space-y-8">
            <Link to="/sobre-nosotros" onClick={() => setIsMenuOpen(false)}>
              <li className="text-xl hover:text-gray-200 font-semibold">¿Quienes somos?</li>          
            </Link>            
            <Link to="/proyectos" onClick={() => setIsMenuOpen(false)}>
              <li className="text-xl hover:text-gray-200 font-semibold">Proyectos</li>          
            </Link>            
            <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
              <li className="text-xl hover:text-gray-200 font-semibold">Contacto</li>
            </Link>
          </ul>
        </nav>
        <img src={logoCMblanco} alt="Logo Cientifica Mente" className="h-16 w-auto mb-10" />
      </div>
    </header>
  );
};

export default Header