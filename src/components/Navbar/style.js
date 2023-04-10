import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Container = styled.div`
 
`
export const Nav = styled.div`
  width: 100%;
  height: 65px;
  background-color: var(--colorPrimary);
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
`
export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
 max-width: 1240px;
 padding:0 20px;
 margin: 0 auto;
 width: 100%;
`

export const Sections = styled.div`
 display: flex;
 align-items: center;
 .active{
    color: #00f3ff;
 }
`
export const Logo = styled.img`
width: 31px;
height: 36px;
margin-right: 12px;
`
export const Link = styled(NavLink)`
 color: #fff;
  margin: ${({ logo }) => !logo && "0 32px;"};
 
`