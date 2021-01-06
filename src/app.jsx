import './main.css'
import React from 'react'
import NavBar from './components/navBar/NavBar'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Projects from './components/porjects/Projects'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <h1>Este Portafolio me va a dar un peguita</h1>
    <NavBar/>
    <Hero/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default App