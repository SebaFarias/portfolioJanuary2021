import React, { useContext, useState } from 'react'
import LangContext from '../../LanguageConfig'
import data from '../../../data/data'
import ProjectCard from './ProjectCard'
import { 
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AddCircle, Search } from '@material-ui/icons';


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
    addBtnContainer:{
      display: 'flex',
      justifyContent: 'end',
    },
    filtersContainer:{
    },
}));

const Projects = () => {

  const lang = useContext(LangContext)
  const classes = useStyles()
  const projects = data.projects
  const [ newFilter, setNewFilter ] = useState( '' )
  const [ filters, setFilters ] = useState( [ ] )

  const handleChange = event => {
    setNewFilter(event.target.value)
  }
  const addFilter = ( ) => {
    console.log('adding')
    if( newFilter === '' ) return
    if( filters.indexOf(newFilter) === -1 ){
      setFilters( prevState => {
        const newFiltersArray = prevState
        newFiltersArray[prevState.length] = newFilter
        return newFiltersArray
      })
      setNewFilter('')
    }
  }

  return (
    <Paper className={classes.root}>
      <Grid container alignContent='center' justify='center' spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h2' color='primary' align='center'>Projects</Typography>
        </Grid>
        <Grid container item xs={12} alignItems='center'>
          <Grid item xs={11}>
            <div className={classes.searchBar}>
              <TextField 
                label={lang.search} 
                variant='outlined' 
                color='secondary' 
                value={newFilter}
                onChange={handleChange}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <Search/>
                    </InputAdornment>
                  ),
                }}
                />
            </div>
          </Grid>
          <Grid item xs={1} className={classes.addBtnContainer}>
            <IconButton color='secondary' onclick={addFilter}>
              <AddCircle/>
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.filtersContainer}>
          
        </Grid>
      </Grid>
      <Grid container alignItems='center' justify='center' spacing={4} className={classes.searchBar}>
          {projects.map( ( project , index ) => {
            return (
              <ProjectCard project={project} divider={index>0}/>
            )
          })}
      </Grid>
    </Paper>
  )
}

export default Projects