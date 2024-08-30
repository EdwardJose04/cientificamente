// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/layouts/main/Inicio';
import Contacto from './components/layouts/contact/Contacto';
import About from './components/layouts/about/About';
import Proyectos from './components/layouts/projects/Proyectos';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Inicio/>}/>

          <Route path="/sobre-nosotros" element={<About />} />

          <Route path="/proyectos" element={<Proyectos />} />
          
          <Route path="/contacto" element={<Contacto />} /> 
        </Routes>
      </div>
    </Router>
  );
}

// Componentes de ejemplo (deberías crear estos componentes en archivos separados)


export default App;