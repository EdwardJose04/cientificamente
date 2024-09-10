import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import correoEnviado from '../../../assets/mensajeEnviado.json';
import Lottie from 'lottie-react';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Cientifica Mente',
      from_name: `${formData.nombre} ${formData.apellido}`,
      from_email: formData.correo,
      subject: formData.asunto,
      message: formData.mensaje
    };

    emailjs.send(
      'service_45p6xnv',
      'template_iqz5kib',
      templateParams,
      'seVqo3Bm6pByw6CJz'
    )
      .then((response) => {
        setShowSuccessMessage(true);
        setFormData({ nombre: '', apellido: '', correo: '', asunto: '', mensaje: '' });
        setTimeout(() => setShowSuccessMessage(false), 3000); // Hide message after 3 seconds
      }, (err) => {
        alert('Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.');
      });
  };

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto mt-10 mb-10 px-4 relative">
        {showSuccessMessage && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 z-50">
            <Lottie animationData={correoEnviado} loop={true} style={{width: 400, height: 200}} />
          </div>
        )}
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
              className="bg-custom-blue hover:bg-custom-blue-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
        <div>
          <p>O escríbenos al siguiente correo: <span className='font-semibold'>investigaciones@ucp.edu.co</span></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacto;