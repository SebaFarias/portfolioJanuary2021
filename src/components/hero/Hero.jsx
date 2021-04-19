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
    margin: '0.75rem 3px',
    paddingBottom: '5rem',
    [theme.breakpoints.up('md')]: {
      margin: '4rem 3px',
    }
  },
  title:{
    fontSize: '2.5rem',
    fontWeight: 900,
    margin: `0px ${theme.spacing(6)}px`,
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      margin: 0,
    }
  },
  subtitle:{
    fontSize: '1.75Rem',
    margin: `${theme.spacing(2)}px ${theme.spacing(6)}px`,
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      margin: `${theme.spacing(2)}px 0px`,
    }
  },
  button:{
    margin: `0px ${theme.spacing(6)}px`,
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
  const alt= lang.hero.alt

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
            {lang.hero.title}
          </Typography>
          <Typography 
            variant='h2'
            align='center'
            className={ classes.subtitle }
            >
            {lang.hero.subtitle}
          </Typography>
          <Button 
            variant="contained"
            color="secondary"
            fullWidth={false}
            className={ classes.button }
          >
            {lang.hero.CTA}
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