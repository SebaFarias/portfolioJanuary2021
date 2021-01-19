import React, {useState} from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography, Hidden } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import { Description, Menu, Settings } from '@material-ui/icons'
import Toggler from './Toggler'
import SettingsMenu from './SettingsMenu'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const navBar = ({themeToggler,langToggler}) =>{
  const classes = useStyles()
  const [ showSettingsMenu, setShowSettingsMenu ] = useState(false);

  return(
    <AppBar position='sticky'>
      <Toolbar>
        <Hidden smUp>
          <IconButton color='inherit' className={classes.menuButton}>
            <Menu/>  {/*Hamburguer Menu Icon*/}
          </IconButton>
        </Hidden>
        <Typography variant='h6' className={classes.title}>
          Seba Farias
        </Typography>
        <Hidden xsDown>
          <Button 
            variant='text' 
            color='inherit'
            startIcon={<Description/>}
            >
            CV
          </Button>
          <IconButton 
            color='inherit' 
            onClick={() => {setShowSettingsMenu( prevState => {
              return !prevState})}}
          >
            <Settings/>
          </IconButton>
        </Hidden>
        {showSettingsMenu && <SettingsMenu themeToggler={themeToggler}langToggler={langToggler}/>}
      </Toolbar>
    </AppBar>
  )
}

export default navBar