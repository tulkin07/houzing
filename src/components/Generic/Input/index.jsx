import React from 'react'
import { Container } from './syle'

export default function Input(props) {
  return (
   <Container {...props}>{props.children}</Container>
  )
}
