import React, { useState } from 'react'
import PropTypes from 'prop-types';
import data from '../../../data/data'
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

const TabPanel = (props) => {
  const { experience, value, index,  ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography variant='h4' align='left'>{`${experience.role} @ ${experience.company}`}</Typography>
              <Typography variant='body1' align='left'>{experience.content.description}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              Proyect Shower{/* <ProjectShower projects={experience.content.responsabilities}/>   */}
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
}
  
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
  
const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    margin: '6rem 3px',
    padding: '4rem 2rem',
    boxShadow: '0px 15px 5px 10px rgba(0,0,0,0.1)',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  leftPanel: {
    maxWidth: '30vw',
    padding: '2rem 0',
  },
  imgContainer: {
    padding: '1rem',
  },
  img:{
    width: '100%',
    height: 'auto',
  },
}));

const Experience = () => {

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const experienceList = data.experience
  const companyImg = [ 'https://i.postimg.cc/Fz6jp89n/logo-Aligare.png', 'https://i.postimg.cc/J7YcRDbc/logo-Surtigas.png']

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  
  return (
    <section id='experience'>
      <Paper className={classes.root}>
        <Grid container alignContent='center' justify='center' spacing={1}>
          <Grid item xs={12}>
            <Typography variant='h2' color='primary' align='center'>Experience</Typography>
          </Grid>
          <Grid item xs={2}>
            <div className={classes.leftPanel}>
              <div className={classes.imgContainer}>
                <img className={classes.img} src={companyImg[value]}></img>
              </div>
              <Tabs
                selectionFollowsFocus
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Experience tabs"
                className={classes.tabs}
                >
                {experienceList.map( ( experience, index ) =>{
                  return <Tab label={experience.company} {...a11yProps(index)} />
                })}
              </Tabs>
            </div>
          </Grid>
          <Grid xs={10}>
            {experienceList.map( ( experience, index ) => {
              return <TabPanel value={value} index={index} experience={experience}/>
            })}
          </Grid>
        </Grid>
      </Paper>
    </section>
  )
}

export default Experience