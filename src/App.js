// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/layouts/main/Inicio';
import Contacto from './components/layouts/contact/Contacto';
import About from './components/layouts/about/About';
import Proyectos from './components/layouts/projects/Proyectos';
import Index from './components/layouts/main/Index';

function App() 
{
  return (
    <Router>
      <div>
        <Routes>
          <Route 
          path="/" 
          element={<Index/>}
          />

          <Route 
          path="/inicio" 
          element={<Inicio/>}
          />

          <Route 
          path="/sobre-nosotros" 
          element={<About />} 
          />

          <Route 
          path="/proyectos" 
          element={<Proyectos />} 
          />
          
          <Route 
          path="/contacto" 
          element={<Contacto />} 
          /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;