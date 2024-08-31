import React from 'react';
import { Link } from 'react-router-dom';
import logoUCP_CM from '../../../assets/img/index/logoUCP_CM.svg';
import '../../../assets/css/inicio.css'
import image1 from '../../../assets/img/index/index1.svg';
import image2 from '../../../assets/img/index/index2.svg';
import image3 from '../../../assets/img/index/index3.svg';
import image4 from '../../../assets/img/index/index4.svg';
import image5 from '../../../assets/img/index/index5.svg';
import image6 from '../../../assets/img/index/index6.svg';

const ImageWithHover = ({ src, alt, title, text, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const isTopRow = index < 3;

  return (
    <div
      className={`image-container ${isTopRow ? 'top-row' : 'bottom-row'} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="image-wrapper">
        <img src={src} alt={alt} />
      </div>
      <div className="image-text">
        <h1 className="image-title">{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

function Index() {
  return (
    <div className="index-container">
      <a href="https://www.ucp.edu.co" target="_blank" rel="noopener noreferrer" className="logo-link">
        <img src={logoUCP_CM} alt='Logo' className="logo" />
      </a>
      <div className="content-wrapper">
        <div className="images-grid">
          <ImageWithHover
            src={image1}
            alt='CAPAZ'
            title="CAPAZ"
            text="Centro analítico de producciones culturales"
            index={0}
          />
          <ImageWithHover
            src={image2}
            alt='Estado socioemocional'
            title="Estado socioemocional"
            text="Desarrollo socioemocional de niños y adolescentes de Risaralda"
            index={1}
          />
          <ImageWithHover
            src={image3}
            alt='Vacunarte'
            title="Vacunarte"
            text="Tecnoestrés y perspectivas de género: una lectura desde la salud mental"
            index={2}
          />
          <ImageWithHover
            src={image4}
            alt='Adultez tardía'
            title="Adultez tardía"
            text="Programa de entrenamiento y estimulación de la memoria en el adulto mayor normal y patológico"
            index={3}
          />
          <ImageWithHover
            src={image5}
            alt='Cemab'
            title="Cemab"
            text="Desarrollo de línea de envases para transporte y conservación de tejido vivo y estéril"
            index={4}
          />
          <ImageWithHover
            src={image6}
            alt='Smaf + enfaces'
            title="Smaf + enfaces"
            text="Salud mental actividad física y bienestar: enfanses 2/32"
            index={5}
          />
        </div>
        <div className="button-container">
          <Link to='/inicio' className="start-button">
            Iniciar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;