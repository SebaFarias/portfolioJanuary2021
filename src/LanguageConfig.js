import React from 'react'

const LANGUAGE_KEY = 'english'
const ENGLISH = {
  hero: "This Portfolio will get me a job",
  settings: "Settings",
  language: "Language",
  darkMode: "Dark Mode",
}
const SPANISH = {
  hero:"Este Portafolio me va a dar una peguita",
  settings: "Configuración",
  language: "Lenguaje",
  darkMode: "Modo Oscuro",
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