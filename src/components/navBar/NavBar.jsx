import React from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import { Description, Menu } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const navBar = () =>{
  const classes = useStyles()
  return(
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton color='inherit' className={classes.menuButton}>
          <Menu/>{/*Hamburguer Menu Icon*/}
        </IconButton>
        <Typography variant='h6' className={classes.title}>
          Seba Farias
        </Typography>
        <Button 
          variant='text' 
          color='inherit'
          startIcon={<Description/>}
        >
          CV
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default navBar