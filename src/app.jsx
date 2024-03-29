import './main.css'
import React, {useState, useCallback } from 'react'
import { ThemeProvider as MuiThemeProvider, ThemeProvider }  from '@material-ui/styles'
import { DARK_THEME, LIGHT_THEME, darkMode } from './themeConfig'
import LangContext , { ENGLISH, SPANISH, language } from './LanguageConfig'
import { ModalProvider } from './Context/Modal'
import TheModal from './containers/TheModal'
import NavBar from './components/navBar/NavBar'
import TheLayout from './containers/TheLayout'
import Footer from './components/footer/Footer'
// import Projects from './components/porjects/Projects'
import Hero from './components/hero/Hero'
import Attribution from './components/attribution/Attribution'

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
    <MuiThemeProvider theme={ darkTheme ? DARK_THEME : LIGHT_THEME }>
      <ThemeProvider theme={ darkTheme ? DARK_THEME : LIGHT_THEME }>
        <LangContext.Provider value={ english? ENGLISH : SPANISH }>
          <ModalProvider>
            <NavBar 
              themeToggler={[ darkTheme, toggleDarkMode ]}
              langToggler ={[ english, toggleEnglish]}  
              />
            <TheLayout>
              <Hero/>
              <Attribution/>
            </TheLayout>
            <Footer/>
            <TheModal/>
          </ModalProvider>
        </LangContext.Provider>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default App