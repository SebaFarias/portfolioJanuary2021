import React, { createContext } from 'react'

const LANGUAGE_KEY = 'english'
const ENGLISH = {
  attribution:{
    made: 'Made with ',
  },
  contact: {
    name: 'Name',
    mail: 'Email',
    message: 'Message',
    subject: 'Subject',
    send: 'Send Message',
  },
  hero:{
    title: "Full-Stack Developer",
    subtitle: "Looking for a Front-End job",
    alt: "cool guy sitting on top of his desk",
    CTA: "Hire",
  },
  navBar:{
    settings: "Settings",
    language: "Language",
    darkMode: "Dark Mode",
  },
  projects:{
    search: "Search",
  },
}
const SPANISH = {
  attribution:{
    made: 'Hecho con ',
  },
  contact: {
    name: 'Nombre',
    mail: 'Email',
    message: 'Mensaje',
    subject: 'Asunto',
    send: 'Enviar Mensaje',
  },
  hero:{
    title:"Desarrollador Full-Stack",
    subtitle: "Buscando trabajo de Front-End",
    alt: "Tipo con estilo sentado encima de su escritorio",
    CTA: "Contratar",
  },
  navBar:{
    settings: "Configuración",
    language: "Lenguaje",
    darkMode: "Modo Oscuro",
  },
  projects:{
    search: "Búsqueda",
  },
}
const language = {
  getLang: () => {
    try{
      const storedLang = window.localStorage.getItem(LANGUAGE_KEY)
      if( typeof storedLang !== 'undefined' && storedLang !== null) return storedLang === true;
      if (navigator.languages && navigator.languages.length) return !/es/g.test(navigator.languages[0]);
      return !/es/g.test(navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en')
    }
    catch(e){
      return true
    }
  },
  setLang: value => {
    try{
      window.localStorage.setItem(LANGUAGE_KEY,JSON.stringify( value === true ))
    }
    catch(e){
      
    }
  },
}

export { ENGLISH, SPANISH, language }
export default createContext();