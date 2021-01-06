import './main.css'
import React from 'react'
import {ThemeProvider} from '@material-ui/styles'
import theme from './themeConfig'
import NavBar from './components/navBar/NavBar'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Projects from './components/porjects/Projects'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Hero/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App