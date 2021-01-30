import React, { useContext } from 'react'
import LangContext from '../../LanguageConfig'
import data from '../../../data/data'
import ProjectCard from './ProjectCard'
import { Divider, Grid, InputAdornment, Paper, TextField, Typography, Hidden } from '@material-ui/core'
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
    padding: '4rem 2rem',
    boxShadow: '0px 15px 5px 10px rgba(0,0,0,0.1)',
    },
    searchBar:{
      margin: '1rem 0',
    },
}));

const Projects = () => {

  const lang = useContext(LangContext)
  const classes = useStyles()
  const projects = data.projects

  return (
    <Paper className={classes.root}>
      <Grid container alignContent='center' justify='center' spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h2' color='primary' align='center'>Projects</Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.searchBar}>
            <TextField 
              label={lang.search} 
              variant='outlined' 
              color='secondary' 
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <SearchIcon/>
                  </InputAdornment>
                ),
              }}
              />
          </div>
        </Grid>
      </Grid>
      <Grid container alignItems='center' justify='center' spacing={4} className={classes.searchBar}>
          {projects.map( ( project , index ) => {
            return (
              <>
                {index>0?
                <Hidden smUp>
                  <Grid item xs={12}>
                    <Divider/>
                  </Grid>
                </Hidden> : ''}
              <Grid item xs={12} sm={5} md={4}>
                <ProjectCard project={project}/>
              </Grid>
              </>
            )
          })}
      </Grid>
    </Paper>
  )
}

export default Projects