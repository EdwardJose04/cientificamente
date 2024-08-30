import React from 'react'
import { Link } from 'react-router-dom'
import logoCMblanco from '../../assets/img/logos/logoCMblanco.svg'
import logoUCPblanco from '../../assets/img/logos/logoUCPblanco.svg'

function Header() {
  return (
    <header className="bg-custom-blue text-white py-4 shadow-md font-poppins">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logoCMblanco} alt="Logo Cientifica Mente" className="h-14 w-auto" />
        </Link>
        <nav>
          <ul className="flex items-center space-x-6">
            <li className="hover:text-gray-200 px-5 font-poppins font-semibold">¿Quienes somos?</li>
            <li className="h-5 border-l border-white"></li>
            <li className="hover:text-gray-200 px-5 font-poppins font-semibold">Proyectos</li>
            <li className="h-5 border-l border-white"></li>
            <li className="hover:text-gray-200 px-5 font-poppins font-semibold">Contacto</li>
          </ul>
        </nav>
        <a href="https://www.ucp.edu.co" target="_blank" rel="noopener noreferrer">
          <img src={logoUCPblanco} alt="Logo UCP" className="h-14 w-auto" />
        </a>
      </div>
    </header>
  );
};

export default Header