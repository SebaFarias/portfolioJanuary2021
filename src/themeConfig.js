import {createMuiTheme} from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors'

const DARK_MODE_KEY = 'dark_mode'
const LIGHT_THEME = createMuiTheme({
  palette: {
    background:{
      paper: '#F4F4F4',
    }
  },
})
const DARK_THEME = createMuiTheme({
  palette: {
    primary: purple,
    type: 'dark',
    background:{
      paper: '#1B1931',
      default: '#1D1023',
    }
  },
})
const darkMode = {
  getTheme: () => {
      try {
          return JSON.parse(window.localStorage.getItem(DARK_MODE_KEY)) === true
      } catch (e) {
          return false
      }
  },
  setTheme: value => {
      try {
          window.localStorage.setItem(DARK_MODE_KEY,JSON.stringify(value === true))
      } catch (e) {}
  }
}
export { DARK_THEME , LIGHT_THEME , darkMode }