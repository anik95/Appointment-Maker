import React, { Fragment } from 'react'
import Backdrop from './Backdrop'
import { ModalElement } from '../StyledComponents'

const Modal = props => {
  return (
    <Fragment>
      <Backdrop
        show={props.show}
        clicked={props.modalClosed}
      />
      {
        props.show && (
          <ModalElement
            style={{
              opacity: props.show ? 1 : 0
            }}
          >
            {props.children}
          </ModalElement>
        )
      }
    </Fragment>
  )
}

export default Modal