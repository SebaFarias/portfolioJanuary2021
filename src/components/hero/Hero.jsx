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
import images from '../../img/index.js'

const useStyles = makeStyles( ( theme ) => ({
  root:{
    margin: '4rem 3px',
    paddingBottom: '5rem',
  },
  mobileRoot:{
    margin: '1.5rem 3px',
    paddingBottom: '5rem',  
  },
  title:{
    fontSize: '2.5rem',
    fontWeight: 900,
    textAlign: 'left',
    marginBottom: theme.spacing(2),
  },
  mobileTitle:{
    fontSize: '2.5rem',
    fontWeight: 900,
    margin: `0 ${theme.spacing(4)}px ${theme.spacing(2)}px`,
  },
  subtitle:{
    fontSize: '1.75Rem',
    textAlign: 'left',
  },
  mobileSubtitle:{
    fontSize: '1.75Rem',
    margin: `0px ${theme.spacing(4)}px`,
  },
  button:{
    marginTop: theme.spacing(2),
    maxWidth: 120,
  },
  mobileButton:{
    margin: `${theme.spacing(2)}px ${theme.spacing(4)}px 0px`,
  },
}))

const Hero = () => {
  const desktop = useMediaQuery('(min-width:960px)');
  const lang = useContext(LangContext)
  const classes = useStyles()
  const imgURL = images.office
  const alt= lang.heroAlt

  return(
    <Grid container className={desktop? classes.root : classes.mobileRoot}>
      <Hidden mdUp>
        <Grid item container sm={12}>
          <HeroImg url={imgURL} alt={alt}/>
        </Grid>
      </Hidden>
      <Grid item container sm={12} md={6} direction='column' justify='flex-end'>
        <Typography 
          className={ desktop? classes.title : classes.mobileTitle }
          variant='h1'
          color='primary'
          align='center'
          >
          {lang.heroTitle}
        </Typography>
        <Typography 
          variant='h2'
          align='center'
          className={ desktop? classes.subtitle : classes.mobileSubtitle }
          >
          {lang.heroSubtitle}
        </Typography>
        <Button 
          variant="contained"
          color="secondary"
          fullWidth={false}
          className={desktop? classes.button : classes.mobileButton}
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
  )
}

export default Hero