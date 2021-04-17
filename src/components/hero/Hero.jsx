import React, {useContext} from 'react'
import LangContext from '../../LanguageConfig'
import { 
  Button,
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import HeroImg from './HeroImg'
import img from '../../img/office.png'

const useStyles = makeStyles( (theme) => ({
  root:{
    margin: '4rem 3px',
    paddingBottom: '5rem',
  },

  title:{
    fontSize: '2.5rem',
    fontWeight: 900,
    marginBottom: 20,
    textAlign: 'left',
  },
  mobileTitle:{
    fontSize: '2.5rem',
    fontWeight: 900,
    marginBottom: 20,
  },
  subtitle:{
    fontSize: '1.75Rem',
  },
  mobileSubtitle:{
    fontSize: '1.75Rem',
    textAlign:'center',
  },
  button:{
    marginTop: 10,
    maxWidth: 120,
  },
  mobileButton:{
    margin: '10px 10px 0px 10px',
  },
}))

const Hero = () => {
  const desktop = useMediaQuery('(min-width:960px)');
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
      <Typography variant='h1' color='primary' className={ desktop? classes.title : classes.mobileTitle }>
        {lang.heroTitle}
      </Typography>
      <Typography variant='h2'className={ desktop? classes.subtitle : classes.mobileSubtitle}>
        {lang.heroSubtitle}
      </Typography>
      <Button variant="contained" color="secondary" fullWidth={false} className={desktop? classes.button : classes.mobileButton}>
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