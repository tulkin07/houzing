import styled from "styled-components";
import {ReactComponent as bed}  from  '../../assets/icons/bed.svg'
import {ReactComponent as bath}  from  '../../assets/icons/bath.svg'
import {ReactComponent as garage}  from  '../../assets/icons/car.svg'
import {ReactComponent as rule}  from  '../../assets/icons/rule.svg'
import {ReactComponent as size}  from  '../../assets/icons/size.svg'
import {ReactComponent as love}  from  '../../assets/icons/love.svg'
export const Card = styled.div`
width: 380px;
/* height: 429px; */
background: #FFFFFF;
border: 1px solid #E6E9EC;
border-radius: 3px;
`
Card.Header  = styled.img`
 width: 100%;
 height: 220px;
`
Card.Body = styled.div`
 padding: 15px 20px 14px;
`
Card.Title = styled.div`
 font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #0D263B;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`
Card.SubTitle = styled.div`
 font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #696969;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
padding-top: 4px;
`

Card.Details = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: end;
 margin-top: 14px;
`
export const Icon =styled.div`

`
Icon.Bed  = styled(bed)`
margin-bottom:5px ;
`
Icon.Bath  = styled(bath)`
margin-bottom:5px ;
`
Icon.Garage  = styled(garage)`
margin-bottom:5px ;
`
Icon.Ruler  = styled(rule)`
margin-bottom:5px ;
`
Icon.Size  = styled(size)`
margin-right: 20px;
`
Icon.Love  = styled(love)`
cursor: pointer;
width: 20px;
height: 20px;
:active{
    transform: scale(0.9);
}
`

Card.DetailsItem = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
`
export const Devider =styled.div`
 width: 100%;
 height: 1px;
 background-color: #E6E9EC;
`

export const Footer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 8px 20px ;
`
Footer.Details = styled.div`
 display: ${({footer})=>footer&&'flex'};
 align-items: center;
`
Footer.Circle = styled.div`
 width: 35px;
 height: 35px;
 border-radius: 50%;
 background-color: #F6F8F9;
 display: flex;
 align-items: center;
 justify-content: center;
`