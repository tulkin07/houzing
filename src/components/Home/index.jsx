import React from 'react'
import { Container } from './style'
import Carousel from '../Carousel'
import HouseCard from '../HouseCard'

export default function Home() {
  return (
    <>
      <Carousel />
      <Container>
        <HouseCard />
      </Container>
    </>

  )
}
