import React from 'react'
import { Container } from './syle'

export default function Button(props) {
  return (
   <Container {...props}>{props.children}</Container>
  )
}
