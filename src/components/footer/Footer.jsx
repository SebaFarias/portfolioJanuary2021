import React from 'react'
import {
  AppBar,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Socials from './Socials'


const useStyles = makeStyles((theme) => ({
  root: {
  },
}))

const Footer = () => {

  const classes = useStyles()

  return (
    <AppBar 
      id='footer'
      className={classes.root}
      position='static'
      component='footer'
    >
      <Socials/>
    </AppBar>
  )
}

export default Footer