import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Modal,
  Paper,
} from '@material-ui/core';
import ModalContext from '../Context/Modal'

const useStyles = makeStyles((theme) =>({
  container:{
    display: 'flex',
    position: 'absolute',
    top: '5vh',
    bottom: '5vh',
    left: '10vw',
    right: '10vw',
    padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
  },
}))
const TheModal = () => {

  const classes = useStyles()
  const [ modal, modalController ] = useContext(ModalContext)

  return(
  <Modal
    id='modal'
    open={modal.open}
    onClose={modalController.closeModal}
    className={classes.root}
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >
    <Paper className={ classes.container }>
      { modal.body }
    </Paper>
  </Modal>
  )
}

export default TheModal