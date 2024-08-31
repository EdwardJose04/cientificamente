import React, { useState } from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { nombre, apellido, correo, asunto, mensaje } = formData;
    const body = `
Nuevo mensaje de ${correo}
Nombre: ${nombre} ${apellido}

${mensaje}

Este mensaje fue enviado desde el formulario de contacto del sitio web Cientifica Mente.
    `.trim();

    const mailtoLink = `mailto:edward_rangel@soy.sena.edu.co?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink, '_blank');
  };

  return (
    <div>
      <Header />
      
      <div className="max-w-4xl mx-auto mt-10 mb-10 px-4">
        <form className="w-full px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
                Apellido
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="apellido"
                type="text"
                placeholder="Tu apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
              Correo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="correo"
              type="email"
              placeholder="Tu correo electrónico"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="asunto">
              Asunto
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="asunto"
              type="text"
              placeholder="Asunto del correo"
              value={formData.asunto}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje">
              Mensaje
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mensaje"
              placeholder="Escribe tu mensaje aquí"
              rows="4"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Contacto;