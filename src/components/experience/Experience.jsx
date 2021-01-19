import React, { useState } from 'react'
import PropTypes from 'prop-types';
import data from '../../../data/data'
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
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
          <Typography variant='h2' color='primary' align='center'>Experience</Typography>
          <Grid container>
            <Grid container xs={12} sm={6}>
              <Typography variant='h4' align='left'>{`${experience.role} @ ${experience.company}`}</Typography>
              <Typography variant='body1' align='left'>{experience.content.description}</Typography>
            </Grid>
            <Grid container xs={12} sm={6}>
              <ProjectShower projects={experience.content.responsabilities}/>  
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
    height: 224,
    margin: '3rem 0rem',
    margin: '1rem',
    boxShadow: '10px 5px 5px 10px rgba(0,0,0,0.3)',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const Experience = () => {

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const experienceList = data.experience

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  
  return (
    <Paper className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Experience tabs"
        className={classes.tabs}
      >
        {experienceList.map( ( experience, index ) =>{
          return <Tab label={experienceList.role} {...a11yProps(index)} />
        })}
      </Tabs>
        {experienceList.map( ( experience, index ) => {
          <TabPanel value={value} index={index} experience={experience}/>
        })}
    </Paper>
  )
}

export default Experience