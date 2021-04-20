import React, { useContext } from 'react'
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

const useStyles = makeStyles( ( theme ) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  title: {
    margin: 'auto',
  },
  button: {
    margin: `${theme.spacing(2)}px auto`,
    [theme.breakpoints.down('sm')]:{
      width: '100%',
    }
  },
}))

const ContactForm = () => {

  const { register, handleSubmit , errors } = useForm()
  const lang = useContext( LangContext )
  const classes = useStyles()

  const onSubmit = dataForm => {
    console.log('submitting')
    console.log( dataForm )
  }

  return(
    <form className={ classes.root } onSubmit={ handleSubmit( onSubmit ) }>
      <h1 className={ classes.title }>Contact Form</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth className={classes.name} variant="outlined">
            <InputLabel htmlFor="search-bar">{lang.contact.name}</InputLabel>
            <OutlinedInput
              id="search-bar"
              inputProps={{...register("name")}}
              labelWidth={60}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12}>
          <FormControl fullWidth className={classes.name} variant="outlined">
            <InputLabel htmlFor="search-bar">{lang.contact.message}</InputLabel>
            <OutlinedInput
              id="search-bar"
              inputProps={{...register("message")}}
              labelWidth={60}
            />
          </FormControl>
        </Grid>
      </Grid>
        <Button            
          variant="contained"
          color="secondary"
          type='submit'
          className={classes.button}
          endIcon={<SendIcon/>}
        >
          {lang.contact.send}
        </Button>
    </form>
  )
}

export default ContactForm