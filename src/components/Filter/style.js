import styled from "styled-components";
import {ReactComponent as home} from '../../assets/icons/home.svg'
import {ReactComponent as filter} from '../../assets/icons/filter.svg'
import {ReactComponent as search} from '../../assets/icons/search.svg'
const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   max-width: 1240px;
   padding:0 20px;
   margin: 10px auto;
   width: 100%;
   gap: 20px;
`
export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   position: relative;
   width: 100%;
`
export const Icon  =styled.div`
 
`
Icon.Home = styled(home)`
 margin-right: 10px;
 position: absolute;
 left: 15px;
`
Icon.Filter = styled(filter)`
  margin-right: 10px;
`
Icon.Search = styled(search)`
 margin-right: 8px;
`

export const Menu = styled.div`
 background: #FFFFFF;
border-radius: 5px;
padding: 30px;
`
export const Row = styled.div`
 display: flex;
 align-items: center;
 margin: 10px 0 20px 0;
 gap: 20px;
`
export { Container }