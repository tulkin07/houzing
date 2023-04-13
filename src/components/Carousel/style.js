import styled from "styled-components";
export const Container = styled.div`
 height: calc(100vh - 130px);
 position: relative;
 div{
  height: 100%;
 }
`

export const SliderImg = styled.img`
 width: 100%;
 height: 100%;
 object-fit: cover;
`
export const Overlay = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 right: 0;
 background-color: rgba(0,0,0,0.5);
 /* z-index: 1; */
`

export const Content = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 right: 0;
 color: #fff;
`

Content.Title = styled.h3`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 44px;
line-height: 48px;
letter-spacing: -0.02em;
color: #FFFFFF;
padding-bottom: 8px;
`
Content.Desc = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
`
Content.Price = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 36px;
letter-spacing: -0.02em;
color: #FFFFFF;
padding-top: 24px;
`
export const Arrow  = styled.img`
  width: 45px;
  height: 45px;
  position: absolute;
  left: ${({left})=>left && "30px"};
  right: ${({left})=>!left && "30px"};;
  top: 50%;
  cursor: pointer;
  /* z-index: 2; */
  :hover{
    opacity: 0.8;
  }
  :active{
    opacity: .7;
  }
`