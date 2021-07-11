import React from 'react'
import { BackdropElement } from './../StyledComponents/index'

const Backdrop = props => (
  props.show ? <BackdropElement onClick={props.clicked}></BackdropElement> : null
)

export default Backdrop