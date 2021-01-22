import React, { useContext } from 'react'
import LangContext from '../../LanguageConfig'
import { Grid, InputAdornment, Paper, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '6rem 3px',
    boxShadow: '0px 15px 5px 10px rgba(0,0,0,0.1)',
    },
    searchBar:{
      margin: '1rem 2rem',
    },
}));

const Projects = () => {

  const lang = useContext(LangContext)
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid xs={12} alignContent='center'>
        <Typography variant='h2' color='primary' align='center'>Projects</Typography>
        </Grid>
        <Grid xs={12} alignContent='center'>
          <div className={classes.searchBar}>
            <TextField 
              label={lang.search} 
              variant='outlined' 
              color='secondary' 
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon/>
                  </InputAdornment>
                ),
              }}
              />
          </div>
        </Grid>
        <Grid container>

        </Grid>
      </Grid>
    </Paper>
  )
}

export default Projects