import React, {useContext} from 'react'
import LangContext from '../../LanguageConfig'
import { 
  Button,
  Grid,
  Hidden,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import HeroImg from './HeroImg'
import images from '../../img/index.js'

const useStyles = makeStyles( ( theme ) => ({
  root:{
    margin: '1.5rem 3px',
    paddingBottom: '5rem',
    [theme.breakpoints.up('md')]: {
      margin: '4rem 3px',
    }
  },
  title:{
    fontSize: '2.5rem',
    fontWeight: 900,
    margin: `0px ${theme.spacing(4)}px ${theme.spacing(2)}px`,
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      margin: `0px 0px ${theme.spacing(2)}px`,
    }
  },
  subtitle:{
    fontSize: '1.75Rem',
    margin: `0px ${theme.spacing(4)}px`,
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      margin: 0,
    }
  },
  button:{
    margin: `${theme.spacing(2)}px ${theme.spacing(4)}px 0px`,
    [theme.breakpoints.up('md')]: {
      maxWidth: 120,
      marginLeft: 0,
    }
  },
}))

const Hero = () => {

  const lang = useContext(LangContext)
  const classes = useStyles()
  const imgURL = images.office
  const alt= lang.heroAlt

  return(
    <section id='hero'>
    <Grid container className={classes.root}>
      <Hidden mdUp>
        <Grid item container sm={12}>
          <HeroImg url={imgURL} alt={alt}/>
        </Grid>
      </Hidden>
      <Grid item container sm={12} md={6} direction='column' justify='flex-end'>
        <Typography 
          className={ classes.title }
          variant='h1'
          color='primary'
          align='center'
          >
          {lang.heroTitle}
        </Typography>
        <Typography 
          variant='h2'
          align='center'
          className={ classes.subtitle }
          >
          {lang.heroSubtitle}
        </Typography>
        <Button 
          variant="contained"
          color="secondary"
          fullWidth={false}
          className={ classes.button }
        >
          {lang.heroCTA}
        </Button>
      </Grid>
      <Hidden smDown alignItems='flex-end'>
        <Grid item container md={6}> 
          <HeroImg url={imgURL} alt={alt}/>
        </Grid>
      </Hidden>
    </Grid>
    </section>
  )
}

export default Hero