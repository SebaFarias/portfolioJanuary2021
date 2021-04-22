import React from 'react'
import {
  Grid,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( (theme) => ({
  root:{
    borderRadius: 0,
    transition: `background ${theme.transitions.duration.complex}ms ease-in, color ${theme.transitions.duration.complex}ms ease-in-out`
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
  },
}))

const TheLayout = ({ children }) => {

  const classes = useStyles()

  return(
    <Paper className={classes.root}>
      <Grid className={classes.container}>
        <Grid item xs={0} md={1}/>
        <Grid item xs={12} md={10}>
          { children }
        </Grid>
        <Grid item xs={0} md={1}/>
      </Grid>
    </Paper>
  )
}

export default TheLayout