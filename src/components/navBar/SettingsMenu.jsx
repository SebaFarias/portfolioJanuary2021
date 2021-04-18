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

const SettingsMenu = ({ open, onClose, themeToggler, langToggler }) => {

  const lang = useContext(LangContext)
  
  return (
    <Menu
      id="settings-menu"
      anchorEl={document.getElementById('nav-bar')}
      open={open}
      onClose={onClose}
      TransitionComponent={Collapse}
      anchorOrigin= {{ vertical: 'top', horizontal: 'right',}}
    >
        <MenuList subheader={<ListSubheader>{lang.settings}</ListSubheader>}>
          <Divider/>
          <MenuItem>
            <ListItemIcon>
              <Translate />
            </ListItemIcon>
            <ListItemText id="switch-list-label-language" primary={lang.language} />
            <ListItemSecondaryAction>
              <Toggler
                toggledPropetie={langToggler}
                inputProps={{ 'aria-labelledby': 'switch-list-label-language' }}
                />
            </ListItemSecondaryAction>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Brightness4 />
            </ListItemIcon>
            <ListItemText id="switch-list-label-theme" primary={lang.darkMode} />
            <ListItemSecondaryAction>
              <Toggler
                toggledPropetie={themeToggler}
                inputProps={{ 'aria-labelledby': 'switch-list-label-theme' }}
                />
            </ListItemSecondaryAction>
          </MenuItem>
        </MenuList>
    </Menu>
  )
}

export default SettingsMenu 