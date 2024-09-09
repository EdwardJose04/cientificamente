import capaz from './img/proyectos/construccion_de_paz/capaz.svg'
import photoboy from './img/proyectos/ambientes_educativos/photoboy.svg'
import iuma from './img/proyectos/desarollo_territorial/iuma.svg'
import cemab from './img/proyectos/desarrollo_empresarial/cemab.svg'
import logistica from './img/proyectos/desarrollo_empresarial/logistica.svg'
import nodo_metal from './img/proyectos/desarrollo_empresarial/nodo_metal.svg'
import adultez from './img/proyectos/salud_mental/adultez.svg'
import competencias from './img/proyectos/salud_mental/competencias.svg'
import echale_gafa from './img/proyectos/salud_mental/echale_gafa.svg'
import enteratea from './img/proyectos/salud_mental/enteratea.svg'
import mil_por_hora from './img/proyectos/salud_mental/mil_por_hora.svg'
import psicocalle from './img/proyectos/salud_mental/psicocalle.svg'
import smaf from './img/proyectos/salud_mental/smaf.svg'
import socioemocional from './img/proyectos/salud_mental/socioemocional.svg'
import vacunarte from './img/proyectos/salud_mental/vacunarte.svg'

const proyectos = {
  categorias: [

    {
      nombre: "Construcción de paz",
      proyectos: [
        {
          id: 1,
          titulo: "CAPAZ",
          descripcion: "Centro analítico de producciones culturales",
          imagenes: [capaz],
          genially: "capaz"
        },
        // Añade más proyectos en esta categoría
      ]
    },

    {
      nombre: "Desarrollo territorial y sostenible",
      proyectos: [
        {
          id: 1,
          titulo: "IUMA",
          descripcion: "Laboratorio de co- creación simbólica artesanal para el empoderamiento y sostenibilidad socio-cultural de las mujeres indígenas Embera Chamí",
          imagenes: [iuma],
          genially: "iuma"
        },
      ]
    },

    {
      nombre: "Salud mental",
      proyectos: [
        {
          id: 1,
          titulo: "Competencias emocionales",
          descripcion: "Para favorecer la inclusión social entre pares en el marco de la multiculturalidad educativa",
          imagenes: [competencias],
          genially: "competencias"
        },
        {
          id: 2,
          titulo: "Adultez tardía",
          descripcion: "Programa de entrenamiento y estimulación de la memoria en el adulto mayor normal y patológico ",
          imagenes: [adultez],
          genially: "adultez"
        },
        {
          id: 3,
          titulo: "Psicocalle",
          descripcion: "Características neuropsicológicas adolescentes infractores de las ciudades de Pereira, Bogotá y Neiva ",
          imagenes: [psicocalle],
          genially: "psicocalle"
        },
        {
          id: 4,
          titulo: "¡Echale gafa!",
          descripcion: "Estudio transcultutral sobre violencia de género y sus efectos en la salud mental de los jovenes ",
          imagenes: [echale_gafa],
          genially: "echale_gafa"
        },
        {
          id: 5,
          titulo: "Desarrollo socioemocional",
          descripcion: "De niños y adolescentes en Risaralda",
          imagenes: [socioemocional],
          genially: "socioemocional"
        },
        {
          id: 6,
          titulo: "Vacunarte",
          descripcion: "Tecnoestrés y perspectivas de género: una lectura desde la salud mental ",
          imagenes: [vacunarte],
          genially: "vacunarte"
        },
        {
          id: 7,
          titulo: "¡A mil por hora!",
          descripcion: "Fortalecimiento de competencias emocionales en adolescentes ",
          imagenes: [mil_por_hora],
          genially: "mil_por_hora"
        },
        {
          id: 8,
          titulo: "SMAF + ENFANCES",
          descripcion: "Salud mental - actividad física y bienestar: enfances 2/32",
          imagenes: [smaf],
          genially: "smaf"
        },
        {
          id: 9,
          titulo: "Entera-TEA",
          descripcion: "Red nacional de divulgación sobre el trastorno del espectro autista (TEA)",
          imagenes: [enteratea],
          genially: "enteratea"
        },
      ]
    },

    {
      nombre: "Desarrollo empresarial e innovación",
      proyectos: [
        {
          id: 1,
          titulo: "CEMAB",
          descripcion: "Desarrollo de línea de envases para transporte y conservación de tejido vivo y estéril ",
          imagenes: [cemab],
          genially: "cemab"
        },
        {
          id: 2,
          titulo: "Nodo metalmecánico",
          descripcion: "Desarrollo y diseño de software para el fortalecimiento económico de Sector Metalmecánico risaraldense.  ",
          imagenes: [nodo_metal],
          genially: "nodo_metal"
        },
        {
          id: 3,
          titulo: "Logística de medicamentos",
          descripcion: "Medicamentos oncológicos para las IPS de la ciudad de Pereira.",
          imagenes: [logistica],
          genially: "logistica"
        },
      ]
    },

    {
      nombre: "Ambientes educativos, desarrollo humano y trascendencia",
      proyectos: [
        {
          id: 1,
          titulo: "Photoboy",
          descripcion: "Prevención de enfermedades ligadas al consumo de tabaco en niñas, niños y adolescentes del Eje Cafetero",
          imagenes: [photoboy],
          genially: "photoboy"
        }
      ]
    }

  ]
};

export default proyectos;