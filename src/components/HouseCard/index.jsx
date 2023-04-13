import { Card, Icon, Devider, Footer } from './style'
import React from 'react'
import empyt from '../../assets/images/empty.png'
export default function HouseCard() {
  return (
    <Card>
      <Card.Header src={empyt} />
      <Card.Body>
        <Card.Title>New Apartment Nice Wiew</Card.Title>
        <Card.SubTitle>Quincy St, Brooklyn, NY, USA</Card.SubTitle>
        <Card.Details>
          <Card.DetailsItem>
            <Icon.Bed />
            <Card.SubTitle>4 Beds</Card.SubTitle>
          </Card.DetailsItem>
          <Card.DetailsItem>
            <Icon.Bath />
            <Card.SubTitle>5 Baths</Card.SubTitle>
          </Card.DetailsItem>
          <Card.DetailsItem>
            <Icon.Garage />
            <Card.SubTitle>1 Garage</Card.SubTitle>
          </Card.DetailsItem>
          <Card.DetailsItem>
            <Icon.Ruler />
            <Card.SubTitle>1200 Sq Ft</Card.SubTitle>
          </Card.DetailsItem>
        </Card.Details>
      </Card.Body>
      <Devider />
      <Footer>
        <Footer.Details>
          <Card.SubTitle>$2,800/mo</Card.SubTitle>
          <Card.Title>$7,500/mo</Card.Title>
        </Footer.Details>
        <Footer.Details footer="true">
          <Icon.Size />
          <Footer.Circle>
            <Icon.Love />
          </Footer.Circle>
        </Footer.Details>
      </Footer>
    </Card>
  )
}
