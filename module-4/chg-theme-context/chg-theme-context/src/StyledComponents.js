import styled from 'styled-components'

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
    background-color: pink;
`



const Header = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 8.4rem;
    width: 100vw;
    /* background-color: pink;     */
`

const Main = styled.main`
    height: 100%;
    width: 100vw;
    background-color: blue;
`

const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;    
    /* margin: auto; */
`

const NavLink = styled.li`
    margin: auto 5rem;
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
    Footer,
    Header,
    Main,
    NavList,
    NavLink,
    NavText
}