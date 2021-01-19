import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles( (theme) => ({
  root: {
    background: 'salmon',
  },
}))

const ProjectShower = ( { projects } ) => {
  
  const classes = useStyles()
  
  return (
    <div className={classes.root}>
      {projects.map( project => {
        return project
      })}
    </div>
  )
}

export default ProjectShower