import React from 'react'
import { Container, Sections, Wrapper ,Nav,Link, Logo} from './style'
import {  Outlet ,useNavigate} from 'react-router-dom'
import {navbar} from '../../utils/navbar.js'
import logo from '../../assets/images/logo.png'
import Button from '../Generic/Button'

export default function Navbar() {
    const navigate = useNavigate()
    return (
        <Container>
            <Nav>
                <Wrapper>
                     <Link logo='true' to={'/home'}> <Sections><Logo src={logo}/> <h3>Houzing</h3> </Sections></Link>
                    <Sections>
                      {
                        navbar.map((item,index)=> {
                            return !item.hidden && <Link key={index} to={item.path}>{item.title}</Link>
                        })
                      }
                    </Sections>
                    <Sections>
                        <Button onClick={()=>navigate('/signin')} type="dark">Sign in</Button>
                    </Sections>
                </Wrapper>
            </Nav>
            <Outlet />
        </Container>
    )
}
