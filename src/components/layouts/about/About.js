import React, { useEffect } from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import Biblioteca from '../../../assets/img/about/about.svg'
import Cesar from '../../../assets/img/about/cesar.png'
import Karen from '../../../assets/img/about/karen.png'
import Maria from '../../../assets/img/about/maria.png'
import Liliana from '../../../assets/img/about/liliana.png'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = "Nosotros | Cientifica Mente";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <div className='h-10'></div>

      <div className="bg-custom-blue-2 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-white font-poppins">CIENTÍFICAMENTE</h2>
            <p className="text-xl text-white">Es una estrategia para promover el diálogo e intercambio de saberes entre la Universidad Católica de Pereira y las comunidades a través de la ciencia.</p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={Biblioteca} alt="About Company" className="w-full max-w-md h-auto object-contain" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl md:text-4xl lg:text-4xl font-semibold mb-12 text-left text-gray-800">
          Conoce a la <span className="text-custom-blue-2">Dirección de Investigaciones e Innovación</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { img: Cesar, name: "César Alberto Aristizabal", role: "Director" },
            { img: Maria, name: "María Jimena López", role: "Coordinadora de Gestión de la Investigación" },
            { img: Liliana, name: "Liliana Alejandra Cadena", role: "Profesional Administrativa Gestión de la Información" },
            { img: Karen, name: "Karen Nicolle López", role: "Auxiliar Administrativo" }
          ].map((person, index) => (
            <div key={index} className="flex flex-col transform transition duration-500 hover:scale-105">
              <div className="w-full overflow-hidden">
                <img src={person.img} alt={person.name} className="w-full h-64 object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{person.name}</h3>
                <p className="text-custom-blue-2 font-medium">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About