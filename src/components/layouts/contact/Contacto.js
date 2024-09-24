import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import correoEnviado from '../../../assets/json/mensajeEnviado.json';
import Lottie from 'lottie-react';

// Componente principal de la página de contacto
function Contacto() {
  
 // Efecto de scroll al inicio
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });
  // Estado para controlar la visibilidad del mensaje de éxito
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Función para actualizar el estado del formulario cuando se modifican los campos
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Preparar los parámetros para la plantilla de correo
    const templateParams = {
      to_name: 'Cientifica Mente',
      from_name: `${formData.nombre} ${formData.apellido}`,
      from_email: formData.correo,
      reply_to: formData.correo,
      subject: formData.asunto,
      message: formData.mensaje
    };

    // Enviar el correo usando emailjs
    emailjs.send(
      'service_45p6xnv',
      'template_iqz5kib',
      templateParams,
      'seVqo3Bm6pByw6CJz'
    )
      .then((response) => {
        // Mostrar mensaje de éxito y limpiar el formulario
        setShowSuccessMessage(true);
        setFormData({ nombre: '', apellido: '', correo: '', asunto: '', mensaje: '' });
        // Ocultar el mensaje de éxito después de 3 segundos
        setTimeout(() => setShowSuccessMessage(false), 3000);
      }, (err) => {
        // Mostrar alerta en caso de error
        alert('Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.');
      });
  };

  // Renderizado del componente
  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto mt-10 mb-10 px-4 relative">
        {/* Mensaje de éxito con animación Lottie */}
        {showSuccessMessage && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 z-50">
            <Lottie animationData={correoEnviado} loop={true} style={{width: 400, height: 200}} />
          </div>
        )}
        {/* Formulario de contacto */}
        <form className="w-full px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          {/* Campos de nombre y apellido */}
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
          {/* Campo de correo electrónico */}
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
          {/* Campo de asunto */}
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
          {/* Campo de mensaje */}
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
          {/* Botón de envío */}
          <div className="flex items-center justify-between">
            <button
              className="bg-custom-blue hover:bg-custom-blue-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
        {/* Información adicional de contacto */}
        <div>
          <p>O escríbenos al siguiente correo: <span className='font-semibold'>investigaciones@ucp.edu.co</span></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacto;