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
import img from '../../img/office.png'

const useStyles = makeStyles( (theme) => ({
  root:{
    margin: '4rem 3px',
  },
  title:{
    fontSize: '2.5rem',
    fontWeight: 900,
    marginBottom: 20,
    textAlign: 'left',
  },
  subtitle:{
    fontSize: '1.75Rem',
  },
  button:{
    marginTop: 10,
    marginBottom: '5rem',
    maxWidth: 120,
  },
}))

const Hero = () => {

  const lang = useContext(LangContext)
  const classes = useStyles()
  const imgURL = img
  const alt= lang.heroAlt

  return(
    <Grid container className={classes.root}>
      <Hidden mdUp>
        <Grid item container sm={12}>
          <HeroImg url={imgURL} alt={alt}/>
        </Grid>
      </Hidden>
      <Grid item container sm={12} md={6} direction='column' justify='flex-end'>
      <Typography variant='h1' color='primary' className={classes.title}>
        {lang.heroTitle}
      </Typography>
      <Typography variant='h2'className={classes.subtitle}>
        {lang.heroSubtitle}
      </Typography>
      <Button variant="contained" color="secondary" fullWidth={false} className={classes.button}>
        {lang.heroCTA}
      </Button>
      </Grid>
      <Hidden smDown alignItems='flex-end'>
        <Grid item container md={6}> 
          <HeroImg url={imgURL} alt={alt}/>
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default Hero