import React from 'react'
import {
  Grid,
} from '@material-ui/core'
import Hero from '../components/hero/Hero'
import Skills from '../components/skills/Skills'
import Experience from '../components/experience/Experience'
import Projects from '../components/porjects/Projects'

const TheLayout = () => {
  return(
    <Grid container>
    <Grid item xs={0} md={1}/>
    <Grid item xs={12} md={10}>
      <Hero/>
      <Skills/>
      <Experience/>
      <Projects/>
    </Grid>
    <Grid item xs={0} md={1}/>
  </Grid>
  )
}

export default TheLayout