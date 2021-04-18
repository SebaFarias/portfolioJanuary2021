import React from 'react'

const LANGUAGE_KEY = 'english'
const ENGLISH = {
  heroTitle: "Full-Stack Web Developer",
  heroSubtitle: "Looking for a Fron-End job",
  heroAlt: "cool guy sitting on top of his desk",
  heroCTA: "Hire",
  settings: "Settings",
  language: "Language",
  darkMode: "Dark Mode",
  search: "Search",
}
const SPANISH = {
  heroTitle:"Desarrollador web Full-Stack",
  heroSubtitle: "Buscando trabajo de Front-End",
  heroAlt: "Tipo con estilo sentado encima de su escritorio",
  heroCTA: "Contratar",
  settings: "Configuración",
  language: "Lenguaje",
  darkMode: "Modo Oscuro",
  search: "Búsqueda",
}
const language = {
  getLang: () => {
    try{
      const localStorage = window.localStorage.getItem(LANGUAGE_KEY)
      if( typeof localStorage !== 'undefined' && localStorage !== null) return localStorage === true;
      if (navigator.languages && navigator.languages.length) return !/es/g.test(navigator.languages[0]);
      const lang = navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
      return !/es/g.test(lang)
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
export default React.createContext();