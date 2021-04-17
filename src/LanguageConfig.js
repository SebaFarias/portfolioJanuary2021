import React from 'react'

const LANGUAGE_KEY = 'english'
const ENGLISH = {
  heroTitle: "Full-Stack Web Developer",
  heroSubtitle: "Looking for a Fron-End job",
  heroCTA: 'Hire',
  settings: "Settings",
  language: "Language",
  darkMode: "Dark Mode",
  search: "Search",
}
const SPANISH = {
  heroTitle:"Desarrolador web Full-Stack",
  heroSubtitle: "Buscando trabajo de Front-End",
  heroCTA: 'Contratar',
  settings: "Configuración",
  language: "Lenguaje",
  darkMode: "Modo Oscuro",
  search: "Búsqueda",
}
const language = {
  getLang: () => {
    try{
      return JSON.parse(window.localStorage.getItem(LANGUAGE_KEY)) === true
    }
    catch(e){
      return false
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