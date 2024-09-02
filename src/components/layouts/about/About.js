import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import Biblioteca from '../../../assets/img/about/about.svg'
import Cesar from '../../../assets/img/about/cesar.svg'
import Karen from '../../../assets/img/about/karen.svg'
import Maria from '../../../assets/img/about/maria.svg'
import Liliana from '../../../assets/img/about/liliana.svg'


function About() {
  return (
    <div>
      <Header />

      {/* ESPACIO BLANCO */}
      <div className="h-10"></div>

      {/* DIV CON EL bg-custom-blue-2 CON UNA IMG A LA DERECHA DEL TODO Y UN TITULO Y TEXTO DEBAJO A LA IZQUIERDA */}
      <div className="bg-custom-blue-2 flex items-center justify-between px-20 py-16">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-white font-poppins px-8">CIENTÍFICAMENTE</h2>
          <p className="text-lg text-white px-8">Es una estrategia para promover el diálogo e intercambio de saberes entre la Universidad Católica de Pereira y las comunidades a través de la ciencia.</p>
        </div>
        <img src={Biblioteca} alt="About Company" className="w-76 h-56 ml-10 object-cover" />
      </div>

      {/* 4 IMG PARA LAS PERSONAS CON SU NOMBRE ABAJO COMO TITULO Y TEXTO ABAJO CON SU CARGO EN LA EMPRESA */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-16 px-20">
        <div>
          <img src={Cesar} alt="César Alberto Aristizabal" className="w-full h-56 object-cover rounded-t-lg" />
          <div className="bg-white rounded-b-lg p-4">
            <h3 className="text-lg font-semibold">César Alberto Aristizabal</h3>
            <p className="text-gray-500">Director</p>
          </div>
        </div>
        
        <div>
          <img src={Maria} alt="John Doe" className="w-full h-56 object-cover rounded-t-lg" />
          <div className="bg-white rounded-b-lg p-4">
            <h3 className="text-lg font-semibold">María Jimena López</h3>
            <p className="text-gray-500">Coordinadora de Gestión de la Investigación</p>
          </div>
        </div>

        <div>
          <img src={Liliana} alt="John Doe" className="w-full h-56 object-cover rounded-t-lg" />
          <div className="bg-white rounded-b-lg p-4">
            <h3 className="text-lg font-semibold">Liliana Alejandra Cadena</h3>
            <p className="text-gray-500">Profesional Administrativa Gestión de la Información</p>
          </div>
        </div>

        <div>
          <img src={Karen} alt="John Doe" className="w-full h-56 object-cover rounded-t-lg" />
          <div className="bg-white rounded-b-lg p-4">
            <h3 className="text-lg font-semibold">Karen Nicolle López</h3>
            <p className="text-gray-500">Auxiliar Administrativo</p>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default About