import React, { useState } from 'react'
import { Container, Icon, Wrapper, Menu, Row } from './style'
import { Button, Input } from '../Generic'
import { Dropdown } from 'antd'

export default function Filter() {
  const [open,setOpen]= useState(false)
  const items = [
    {
      key: '1',
      label: (
        <Menu>
          <h1 className='subTitle'>Address</h1>
          <Row>
            <Input width="200" placeholder="Country" />
            <Input width="200" placeholder="Region" />
            <Input width="200" placeholder="City" />
            <Input width="200" placeholder="Zip code" />
          </Row>
          <h1 className='subTitle'>Apartment info</h1>
          <Row>
            <Input width="200" placeholder="Rooms" />
            <Input width="200" placeholder="Size" />
            <Input width="200" placeholder="Sort" />
          </Row>
          <h1 className='subTitle'>Price</h1>
          <Row>
            <Input width="200" placeholder="Min price" />
            <Input width="200" placeholder="Max price" />
          </Row>
        </Menu>
      ),
    }
  ];
  return (
    <Container>
      <Wrapper>
        <Icon.Home />
        <Input icon="true" placeholder="Enter an address, neighborhood, city, or ZIP code" />
      </Wrapper>

      <Dropdown onClick={(e) => e.preventDefault()}
        open={open}
        menu={{ items, }} placement="bottomRight"
        arrow={{
          pointAtCenter: true,
        }}
      >
        <Button onClick={()=>setOpen(!open)} type="light"> <Icon.Filter /> Advanced</Button>
      </Dropdown>
      <Button type="primary"> <Icon.Search /> Search</Button>
    </Container>
  )
}
