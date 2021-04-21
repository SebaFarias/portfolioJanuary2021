import React , { useContext } from 'react'
import LangContext from '../../LanguageConfig'
import Toggler from './Toggler'
import { 
  Divider,
  Menu,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  ListSubheader,
  Collapse,
} from '@material-ui/core'
import { Translate, Brightness4 } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root:{
    minWidth: 160,
  }
}))

const SettingsMenu = ({ open, onClose, themeToggler, langToggler }) => {

  const lang = useContext(LangContext)
  const classes = useStyles()

  return (
    <Menu
      id="settings-menu"
      className={classes.root}
      anchorEl={document.getElementById('nav-bar')}
      open={open}
      onClose={onClose}
      TransitionComponent={Collapse}
      anchorOrigin= {{ vertical: 'top', horizontal: 'right',}}
    >
      <MenuItem>
        <ListItemText primary={lang.navBar.settings}/>
      </MenuItem>
      <Divider/>
      <MenuItem>
        <ListItemIcon>
          <Translate />
        </ListItemIcon>
        <ListItemText id="switch-list-label-language" primary={lang.navBar.language} />
        <ListItemSecondaryAction>
          <Toggler
            toggledPropetie={langToggler}
            inputProps={{ 'aria-labelledby': 'switch-list-label-language' }}
            />
        </ListItemSecondaryAction>
      </MenuItem>
      <MenuItem dense>
        <ListItemIcon>
          <Brightness4 />
        </ListItemIcon>
        <ListItemText id="switch-list-label-theme" primary={lang.navBar.darkMode} />
        <ListItemSecondaryAction>
          <Toggler
            toggledPropetie={themeToggler}
            inputProps={{ 'aria-labelledby': 'switch-list-label-theme' }}
            />
        </ListItemSecondaryAction>
      </MenuItem>
    </Menu>
  )
}

export default SettingsMenu 