// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/layouts/main/Inicio';
import Contacto from './components/layouts/contact/Contacto';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Inicio/>}/>

          {/* <Route path="/sobre-nosotros" element={<About />} />

          <Route path="/proyecto" element={<Projects />} />*/}
          
          <Route path="/contacto" element={<Contacto />} /> 
        </Routes>
      </div>
    </Router>
  );
}

// Componentes de ejemplo (deberías crear estos componentes en archivos separados)


export default App;