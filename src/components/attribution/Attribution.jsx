import React, { useContext } from 'react'
import LangContext from '../../LanguageConfig'
import { makeStyles } from '@material-ui/core/styles'
import images from '../../img/index'
import { 
  Box,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '25vh',
  },
  img: {
    margin: `auto auto 0`,
    height: 'auto',
    width: '20%',
    animation: `$logo-spin infinite 20s linear`,
  },
  "@keyframes logo-spin": {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  textContaier:{
    margin: `${theme.spacing(2)}px auto`,
    display: 'flex',
    '& > *': {
      marginRight: theme.spacing(1),
    },
    '& > a': {
      background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    },
  },
}))

const Attribution = () => {

  const classes = useStyles()
  const imgURL = images.react
  const lang = useContext(LangContext)
  
  return (
    <section id="attribution" className={classes.root}>
      <img
        className={classes.img} 
        src={imgURL}
      />
      <Box className={classes.textContaier} >
        <Typography align='center'>
          {lang.attribution.made}
        </Typography>
        <Typography
          align='center'
          className='colored-anchor'
          component='a'
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </Typography>
      </Box>
    </section>
  )
}

export default Attribution