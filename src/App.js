// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

// Componentes de ejemplo (deberías crear estos componentes en archivos separados)
function Home() {
  return <h2>Página de Inicio</h2>;
}

function About() {
  return <h2>¿Quiénes somos?</h2>;
}

function Projects() {
  return <h2>Proyectos</h2>;
}

function Contact() {
  return <h2>Contacto</h2>;
}

export default App;