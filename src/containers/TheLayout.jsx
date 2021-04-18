import React from 'react'
import {
  Grid,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Hero from '../components/hero/Hero'
import Skills from '../components/skills/Skills'
import Experience from '../components/experience/Experience'
import Projects from '../components/porjects/Projects'

const useStyles = makeStyles( (theme) => ({
  root:{
    borderRadius: 0,
  }
}))

const TheLayout = () => {

  const classes = useStyles()
  return(
    <Paper className={classes.root}>
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
    </Paper>
  )
}

export default TheLayout