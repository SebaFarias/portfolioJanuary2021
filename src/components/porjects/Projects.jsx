import React, { useContext, useState } from 'react'
import LangContext from '../../LanguageConfig'
import data from '../../../data/data'
import ProjectCard from './ProjectCard'
import {
  Chip, 
  Grid,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
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
      margin: `${theme.spacing(3)}px 0px`,
    },
    addBtnContainer:{
      display: 'flex',
      justifyContent: 'end',
    },
    fullWidth:{
      width: '100%',
    },
    filtersContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
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
  const addFilter = e => {
    console.log('adding')
    e.preventDefault()
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
  const handleDelete = filterToDelete => {
    setFilters( prevState => {
      return prevState.filter( filter => filter !== filterToDelete )
    })
  }

  return (
    <Paper className={classes.root}>
      <Grid container alignContent='center' justify='center' spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h2' color='primary' align='center'>Projects</Typography>
        </Grid>
        <form className={classes.fullWidth} onSubmit={addFilter}>
          <Grid container xs={12} alignItems='center'>
            <Grid item xs={10} sm={11}>
              <FormControl fullWidth className={classes.searchBar} variant="outlined">
                <InputLabel htmlFor="search-bar">{lang.search}</InputLabel>
                <OutlinedInput
                  id="search-bar"
                  value={newFilter}
                  onChange={handleChange}
                  endAdornment={<InputAdornment position="end"><Search/></InputAdornment>}
                  labelWidth={60}
                />
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={1} className={classes.addBtnContainer}>
              <IconButton color='secondary' type='submit'>
                <AddCircle/>
              </IconButton>
            </Grid>
          </Grid>
        </form>
        <Grid item xs={12}>
          <Paper component='ul' className={classes.filtersContainer}>
            {filters.map( filter => {
              return(
                <li key={`${filter}-chip`}>
                  <Chip
                    label={filter}
                    onDelete={()=>{handleDelete(filter)}}
                    className={classes.chip}
                    variant="outlined"
                  />
                </li>
              )
            })}
          </Paper>
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