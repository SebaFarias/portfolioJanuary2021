import React from 'react'
import {
  Grid,
}
from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
  img:{
    width: '100%',
    height: 'auto',
    margin: theme.spacing(2),
  },
}));
  
const HeroImg = ({ alt, url }) => {

  const classes = useStyles()

  return (
    <Grid container sm={12} alignItems='flex-end' justify='center'>
      <img src={url}
      alt={alt || 'Hero img'}        
      className={classes.img}/>
    </Grid>
  )
}

export default HeroImg