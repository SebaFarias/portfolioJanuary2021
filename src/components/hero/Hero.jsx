import React, {useContext} from 'react'
import LangContext from '../../LanguageConfig'
import Typography from '@material-ui/core/Typography'

const Hero = () => {

  const lang = useContext(LangContext)
  return(
    <Typography align='center' variant='h1' color='secondary'>
      {lang.hero}
    </Typography>
  )
}

export default Hero