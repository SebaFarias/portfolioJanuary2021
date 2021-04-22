import React, { useState, createContext } from 'react'

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  
  const [ modal, setModal ] = useState({
    open: false,
    body: <div></div>,
  })
  
  const modalController = {
    closeModal: () => {
      setModal( prevState => {
        return {
          ...prevState,
          open: false,
          body: <div></div>,
        }
      }) 
    },
    openModal: body => {
      setModal( prevState =>{
        return {
          ...prevState,
          open: true,
          body: body,
        }
      })
    }
  }
  
  return (
    <ModalContext.Provider value={[ modal, modalController ]}>
      { children }
    </ModalContext.Provider>
  )
}

export default ModalContext