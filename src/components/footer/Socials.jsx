import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Facebook,
  GitHub,
  LinkedIn,
  Mail,
} from '@material-ui/icons';
import {
  Box,
  IconButton,
} from '@material-ui/core'
import ModalContext from '../../Context/Modal'
import ContactForm from '../contactForm/ContactForm'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Socials = () => {

  const classes = useStyles()
  const modalController = useContext(ModalContext)[1]
  const contact = () => {
    modalController.openModal(<ContactForm/>)
  }

  return <Box className={classes.root}>
    <IconButton 
      aria-label="facebook"
      component='a'
      href='https://www.facebook.com/sebastian.fariasb'
      target='_blank'
      > 
        <Facebook/>
    </IconButton>
      <IconButton
        aria-label="gitHub"
        component='a'
        href='https://github.com/SebaFarias'
        target='_blank'
      >
        <GitHub/>
      </IconButton>
    <IconButton 
      aria-label="email"
      onClick={contact} 
    >
      <Mail/>
    </IconButton>
    <IconButton 
      aria-label="linkedIn"
      href='https://www.linkedin.com/in/sebastian-farias-brunaud-14865b208/'
      target='_blank'
    >
      <LinkedIn/>
    </IconButton>
  </Box>
}

export default Socials