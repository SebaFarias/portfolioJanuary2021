import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import data from '../../../data/data'
import ProjectShower from './ProjectsShower';
import { 
  Box,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography
} from '@material-ui/core';

const a11yProps = (index) => {
  return {
    id: `skills-tab-${index}`,
    'aria-controls': `skills-tabpanel-${index}`,
  };
}

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
  tabs: {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  indicator: {
    top: "0px"
  }
}));

const Skills = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const skillsList = data.skills

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <section id='skils'>
      <Paper className={classes.root}>
        <Grid container alignContent='center' justify='center' spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h2' color='primary' align='center'>Skills</Typography>
          </Grid>
          <Grid item xs={12}>
            {skillsList.map( (skill,skillIndex) => {
              return <TabPanel value={value} index={skillIndex} skill={skill}></TabPanel>
            })}
            <Tabs
              selectionFollowsFocus 
              centered
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="Seba Farias's skills"
              className={classes.tabs}
              classes={{indicator:classes.indicator}}
              >
              {skillsList.map( (skill,skillIndex) => {
                return <Tab label={skill.label} {...a11yProps(skillIndex)} />
              })}
            </Tabs>
          </Grid>
        </Grid>
      </Paper>
    </section>
  )
}

const TabPanel = (props) => {
  const { skill, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`skills-tabpanel-${index}`}
      aria-labelledby={`skills-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Grid container>
            <Grid container xs={12} sm={6}>
              <Typography variant='h4' align='left'>{skill.title}</Typography>
              <Typography variant='body1' align='left'>{skill.content}</Typography>
            </Grid>
            <Grid container xs={12} sm={6}>
              <ProjectShower projects={skill.projects}/>  
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

export default Skills

