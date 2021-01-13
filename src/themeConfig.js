import {createMuiTheme} from '@material-ui/core/styles'

const DARK_MODE_KEY = 'dark_mode'
const LIGHT_THEME = createMuiTheme({
  
})
const DARK_THEME = createMuiTheme({
  
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