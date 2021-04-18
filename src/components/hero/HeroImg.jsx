import React from 'react'
import {
  Grid,
}
from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
  root:{
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
  },
  img:{
    width: '100%',
    height: 'auto',
  },
}));
  
const HeroImg = ({ alt, url }) => {

  const classes = useStyles()

  return (
    <Grid container sm={12} alignItems='flex-end' justify='center' className={classes.root}>
      <img src={url}
      alt={alt || 'Hero img'}        
      className={classes.img}/>
    </Grid>
  )
}

export default HeroImg