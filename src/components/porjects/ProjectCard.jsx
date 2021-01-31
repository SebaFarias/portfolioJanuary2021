import React from 'react'
import { GitHub, LiveTv } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import { 
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Hidden,
  Link,
  Typography } from '@material-ui/core'

const useStyles = makeStyles( (theme) => ({
  root: {
    background: theme.palette.background.default,
    boxShadow: '0px 8px 24px rgba(0,0,0,0.15)'
  },
  img:{
    height: 200,
  },
}))

const ProjectCard = ({ project, divider }) => {

  const classes = useStyles()

  return(
    <>
      {divider?
      <Hidden smUp>
        <Grid item xs={12}>
          <Divider/>
        </Grid>
      </Hidden>:''}
      <Grid item xs={12} sm={5} md={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.img}
              image={project.thumbnail}
              title={`${project.name} preview`}
              />
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
            <Button component={Link} href={project.repository} target='_blank' size="small" color="primary" startIcon={<GitHub/>}>
              Code
            </Button>
            <Button component={Link} href={project.live} target='_blank' size="small" color="primary" startIcon={<LiveTv/>}>
              Live
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  )
}

export default ProjectCard
