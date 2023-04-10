import React from 'react'
import { Container, Sections, Wrapper ,Nav,Link, Logo} from './style'
import {  Outlet } from 'react-router-dom'
import {navbar} from '../../utils/navbar.js'
import logo from '../../assets/images/logo.png'

export default function Navbar() {
    return (
        <Container>
            <Nav>
                <Wrapper>
                     <Link logo='true' to={'/home'}> <Sections><Logo src={logo}/> <h3>Houzing</h3> </Sections></Link>
                    <Sections>
                      {
                        navbar.map((item,index)=><Link key={index} to={item.path}>{item.title}</Link>)
                      }
                    </Sections>
                    <Sections>3</Sections>
                </Wrapper>
            </Nav>
            <Outlet />
        </Container>
    )
}
