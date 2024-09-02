import React from 'react'
import youtube from '../../assets/img/footer/youtube.svg'
import instagram from '../../assets/img/footer/instagram.svg'
import facebook from '../../assets/img/footer/facebook.svg'
import correo from '../../assets/img/footer/correo.svg'
import telefono from '../../assets/img/footer/telefono.svg'
import ubicacion from '../../assets/img/footer/ubicacion.svg'
import ciencias from '../../assets/img/footer/ciencias.svg'
import logoUCPblanco from '../../assets/img/logos/logoUCPblanco.svg'

function Footer() {
  return (
    <>
      <footer className="bg-custom-blue py-6 sm:py-8 md:py-10 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* CONTENIDO A LA IZQUIERDA */}
            <div className="flex justify-center md:justify-start items-center">
              <img src={logoUCPblanco} alt="Logo UCP" className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto" />
            </div>

            {/* CONTENIDO CENTRAL */}
            <div className="flex flex-col space-y-4 items-start justify-center">
              <div className="flex items-center w-full">
                <img src={ubicacion} alt="Ubicación" className="h-5 sm:h-6 md:h-8 w-auto mr-2 flex-shrink-0" />
                <p className="text-xs sm:text-sm">Carrera 21 No. 49-95 Av. de las Américas Pereira, Colombia.</p>
              </div>
              <div className="flex items-center w-full">
                <img src={telefono} alt="Teléfono" className="h-4 sm:h-5 md:h-6 w-auto mr-2 flex-shrink-0" />
                <p className="text-xs sm:text-sm">PBX (606) 3124000 EXT.1043</p>
              </div>
              <div className="flex items-center w-full">
                <img src={correo} alt="Correo" className="h-4 sm:h-5 md:h-6 w-auto mr-2 flex-shrink-0" />
                <p className="text-xs sm:text-sm">investigaciones@ucp.edu.co</p>
              </div>
            </div>

            {/* LÍNEA VERTICAL */}
            <div className="hidden md:block absolute right-1/3 top-[10%] h-[80%] w-px bg-white"></div>

            {/* CONTENIDO A LA DERECHA */}
            <div className="flex flex-col items-center md:items-end justify-center">
              <img src={ciencias} alt="Ciencias" className="h-10 sm:h-12 md:h-14 w-auto mb-4" />
              <div className="flex space-x-4">
                <a href="https://www.youtube.com/channel/UC0rMERruF3JgtXAZETxp_uw" target="_blank" rel="noopener noreferrer" className="hidden sm:block flex-shrink-0">
                  <img src={youtube} alt="Logo UCP" className="h-6 sm:h-7 md:h-8 w-auto" />
                </a>

                <a href="https://www.facebook.com/CientificamenteUCP" target="_blank" rel="noopener noreferrer" className="hidden sm:block flex-shrink-0">
                  <img src={facebook} alt="Logo UCP" className="h-6 sm:h-7 md:h-8 w-auto" />
                </a>

                <a href="https://www.instagram.com/cientificamenteucp/" target="_blank" rel="noopener noreferrer" className="hidden sm:block flex-shrink-0">
                  <img src={instagram} alt="Logo UCP" className="h-6 sm:h-7 md:h-8 w-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-custom-blue-2 py-3 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <p className='text-xs sm:text-sm font-semibold'>
            Desarrollado por el Centro de Innovación Educativa CIE - Universidad Católica de Pereira © 2024
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer