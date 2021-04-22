import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'
import SendIcon from '@material-ui/icons/Send';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@material-ui/core'
import LangContext from '../../LanguageConfig'

const API_URL = 'https://portafolio-postman.herokuapp.com/api/v1'

const useStyles = makeStyles( ( theme ) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  title: {

  },
  formControlContainer:{
    margin: `${theme.spacing(1)}px auto`,
    padding: 0,
    width: '100%',
  },
  inputsContainer: {
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  halfs:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 0,
  },
  emailContainer: {
    margin: `${theme.spacing(1)}px auto`,
  },
  button: {
    margin: `0 auto`,
    [theme.breakpoints.down('xs')]:{
      margin: `0 ${theme.spacing(1)}px`,
      width: '100%',
    }
  },
}))

const sendMessage = data => {
  fetch( API_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})}

const ContactForm = () => {

  const { register, handleSubmit , errors } = useForm()
  const [ submitting, setSubmitting ] = useState(false)
  const lang = useContext( LangContext )
  const classes = useStyles()

  const onSubmit = dataForm => {
    setSubmitting(true)
    console.log('submitting')
    console.log( dataForm )
  }

  return(
    <form className={ classes.root } onSubmit={ handleSubmit( onSubmit ) }>
        <Box className={classes.title} >
          <Typography           
            id="modal-title"
            variant='h3'
            color='primary'
            align='center'
          >
            {lang.contact.title}
          </Typography>
          <Typography
            id="modal-description"
            variant='h6'
            align='center'
          >
            {lang.contact.description}
          </Typography>
        </Box>
        <Grid item container xs={12} spacing={1} className={classes.inputsContainer}>
          <Grid item xs={12} md={6} justifyContent='center' className={classes.halfs}>
            <FormControl fullWidth variant="outlined" className={classes.formControlContainer}>
              <InputLabel htmlFor="contact-message">{lang.contact.message}</InputLabel>
              <OutlinedInput
                id="contact-message"
                inputProps={{...register("message")}}
                aria-label='message'
                labelWidth={60}
                multiline
                rows={4}
              />
            </FormControl>
          </Grid>
          <Grid item container xs={12} md={6} className={classes.halfs}>
            <FormControl fullWidth variant="outlined" className={classes.formControlContainer}>
              <InputLabel htmlFor="contact-name">{lang.contact.name}</InputLabel>
              <OutlinedInput
                id="contact-name"
                inputProps={{...register("name")}}
                labelWidth={60}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined" className={classes.formControlContainer}>
              <InputLabel htmlFor="search-bar">{lang.contact.mail}</InputLabel>
              <OutlinedInput
                id="search-bar"
                inputProps={{...register("mail")}}
                labelWidth={60}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControlContainer} variant="outlined">
              <InputLabel htmlFor="search-bar">{lang.contact.subject}</InputLabel>
              <OutlinedInput
                id="search-bar"
                inputProps={{...register("subject")}}
                labelWidth={60}
              />
            </FormControl>
          </Grid>
        </Grid>
          <Button            
            variant="contained"
            className={classes.button}
            color="secondary"
            type='submit'
            diabled={submitting} 
            endIcon={<SendIcon/>}
          >
            {submitting?lang.contact.sending:lang.contact.send}
          </Button>
    </form>
  )
}

export default ContactForm