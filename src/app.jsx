import './main.css'
import React, {useState, useCallback} from 'react'
import {ThemeProvider} from '@material-ui/styles'
import { DARK_THEME, LIGHT_THEME, darkMode } from './themeConfig'
import LangContext , { ENGLISH, SPANISH, language } from './LanguageConfig'
import NavBar from './components/navBar/NavBar'
import TheLayout from './containers/TheLayout'
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
          <TheLayout/>
          <Footer/>
      </LangContext.Provider>
    </ThemeProvider>
  )
}

export default App