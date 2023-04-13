import React from 'react'
import { Container } from './style'
import HouseCard from '../HouseCard'


export default function Properties() {
  const {REACT_APP_URL:url} = process.env;
  console.log(url)
  return (
    <Container>
     <HouseCard/>
    </Container>
  )
}
