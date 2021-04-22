import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'
import SendIcon from '@material-ui/icons/Send';
import {
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
  y100:{
    height: '100%',
  },
  title: {
    margin: `0 auto auto`,
  },
  button: {
    margin: `auto auto 0`,
    [theme.breakpoints.down('xs')]:{
      margin: `auto ${theme.spacing(1)}px 0`,
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
      <Grid container spacing={2} className={classes.y100}>
        <Grid item xs='12' className={classes.title}>
          <Typography           
            id="modal-title"
            variant='h3'
            align='center'
          >
            {lang.contact.title}
          </Typography>
          <Typography
            id="modal-description"
            variant='body1'
            align='center'
          >
            {lang.contact.description}
          </Typography>
        </Grid>
        <Grid item container xs={12} spacing={2}>
          <Grid itemxs={12} md={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="search-bar">{lang.contact.message}</InputLabel>
              <OutlinedInput
                id="search-bar"
                inputProps={{...register("message")}}
                labelWidth={60}
                multiline
                rows={4}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} className={classes.y100}>
            <Grid item xs={12}>
              <FormControl fullWidth className={classes.name} variant="outlined">
                <InputLabel htmlFor="search-bar">{lang.contact.name}</InputLabel>
                <OutlinedInput
                  id="search-bar"
                  inputProps={{...register("name")}}
                  labelWidth={60}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="search-bar">{lang.contact.mail}</InputLabel>
                <OutlinedInput
                  id="search-bar"
                  inputProps={{...register("mail")}}
                  labelWidth={60}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}> 
              <FormControl fullWidth className={classes.name} variant="outlined">
                <InputLabel htmlFor="search-bar">{lang.contact.subject}</InputLabel>
                <OutlinedInput
                  id="search-bar"
                  inputProps={{...register("subject")}}
                  labelWidth={60}
                />
              </FormControl>
            </Grid>
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
      </Grid>
    </form>
  )
}

export default ContactForm