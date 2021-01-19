import React , { useContext } from 'react'
import LangContext from '../../LanguageConfig'
import Toggler from './Toggler'
import { 
  Divider,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  ListSubheader,
  Paper,
} from '@material-ui/core'
import { Translate, Brightness4 } from '@material-ui/icons'

const SettingsMenu = ({themeToggler,langToggler}) => {
  const lang = useContext(LangContext)
  return (
    <Paper>
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
    </Paper>
  )
}

export default SettingsMenu 


/*-----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);



<div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Toggle Menu Grow
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>




      -------------------------------------------------------------------*/