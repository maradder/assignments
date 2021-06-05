import styled from 'styled-components'
import { Link } from "react-router-dom";


const DivOne = styled.div`
    background-color: ${props => props.backgroundcolor};
    min-height: 200px;
    min-width: 200px;
    max-width: 200px; 
    border-radius: 8px;
`

const DivTwo = styled.div`
    background-color: ${props => props.backgroundcolor};
    min-height: 200px;
    min-width: 200px;
    max-width: 200px; 
    border-radius: 8px;
`

const DivThree = styled.div`
    background-color: ${props => props.backgroundcolor};
    min-height: 200px;
    min-width: 200px;
    max-width: 200px; 
    border-radius: 8px;
`

const DivFour = styled.div`
    background-color: ${props => props.backgroundcolor};
    min-height: 200px;
    min-width: 200px;
    max-width: 200px; 
    border-radius: 8px;
`

const DivFive = styled.div`
    background-color: ${props => props.backgroundcolor.};
    min-height: 200px;
    min-width: 200px;
    max-width: 200px; 
    border-radius: 8px;
`

const DivSix = styled.div`
    background-color: ${props => props.backgroundcolor};
    min-height: 200px;
    min-width: 200px;
    max-width: 200px; 
    border-radius: 8px;
`


const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100vw;
`

const DayNightToggle = styled.i`
    transform: scale(3.5);
    margin-right: 5rem;
    color: #fb8500cf;

    :hover {
        text-shadow: 1px 1px 3px #12121250;
    }
`

const Footer = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    bottom: 0px;
    height: 8.4rem;
    width: 100vw;
    background-color: ${props => props.foregroundcolor};
`

const H1 = styled.h1`
    font-size: 96px;
`

const StyledHeader = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 8.4rem;
    width: 100vw;
    background-color: ${props => props.background};    
`
const Home = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`

const Main = styled.main`
    height: 100%;
    width: 100vw;
`

const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;    
    /* margin: auto; */
`

const NavLink = styled(Link)`
    margin: auto 5rem;
    text-decoration-line: none;
    color: #121212;
`

const NavText = styled.a`
    text-decoration-line: none;
    font-family: 'Prompt', sans-serif;
    font-weight: 200;
    font-size: 2.4rem;    
`
export {
    AppWrapper,
    DayNightToggle,
    DivOne,
    DivTwo,
    DivThree,
    DivFour,
    DivFive,
    DivSix,
    Footer,
    H1,
    Home,
    StyledHeader,
    Main,
    NavList,
    NavLink,
    NavText
}