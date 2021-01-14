import './main.css'
import React, {useState, useCallback} from 'react'
import {ThemeProvider} from '@material-ui/styles'
import { DARK_THEME, LIGHT_THEME, darkMode } from './themeConfig'
import LangContext , { ENGLISH, SPANISH, language } from './LanguageConfig'
import NavBar from './components/navBar/NavBar'
import SettingsMenu from './components/navBar/SettingsMenu'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Projects from './components/porjects/Projects'
import Footer from './components/footer/Footer'

const App = () => {
  const [darkTheme , setDarkTheme] = useState(darkMode.getTheme())
  const toggleDarkMode = useCallback(() => {
    setDarkTheme( prevState => {
        const newState = !prevState;
        darkMode.setTheme(newState);
        return newState;
    });
},[darkTheme]);
  const [english , setEnglish] = useState(language.getLang())
  const toggleEnglish = useCallback(() => {
    setEnglish( prevState => {
        const newState = !prevState;
        language.setLang(newState);
        return newState;
    });
},[english]);

  return (
    <ThemeProvider theme={ darkTheme ? DARK_THEME : LIGHT_THEME }>
      <LangContext.Provider value={ english? ENGLISH : SPANISH }>
        <NavBar 
          themeToggler={[ darkTheme, toggleDarkMode ]}
          langToggler ={[ english, toggleEnglish]}  
          />
      <SettingsMenu 
        themeToggler={[ darkTheme, toggleDarkMode ]}
        langToggler={[ english, toggleEnglish]}  
      />
        <Hero/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Footer/>
      </LangContext.Provider>
    </ThemeProvider>
  )
}

export default App