import React from 'react'
import { GitHub, LiveTv } from '@material-ui/icons'
import { 
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography } from '@material-ui/core'

const ProjectCard = ({ project }) => {
  return(
    <Card>
      <CardActionArea>
        {/* <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          /> */}
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {project.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" startIcon={<GitHub/>}>
          Code
        </Button>
        <Button size="small" color="primary" startIcon={<LiveTv/>}>
          Live
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProjectCard