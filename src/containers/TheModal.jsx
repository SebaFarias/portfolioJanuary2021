import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) =>({
  root:{

  }
}))
const TheModal = ({ children, open, handleClose }) => {

  const classes = useStyles()

  return(
  <Modal
    open={open}
    onClose={handleClose}
    className={classes.root}
  >
    { children }
  </Modal>
  )
}

export default TheModal