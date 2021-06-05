import React from 'react';
import {
        NavList,
        NavLink,
        NavText,
        StyledHeader } from './StyledComponents'
import {ThemeContextConsumer} from './themeContext';
import SliderToggle from './SliderToggle';


const Header = (props) => {
    return(
        <ThemeContextConsumer>
            {context => (
                        <StyledHeader theme={context}>
                        <NavList>
                        <NavLink to='/'><NavText>Home</NavText></NavLink>
                        <NavLink to='/contact'><NavText>Contact</NavText></NavLink>
                        <NavLink to='/about'><NavText>About</NavText></NavLink>
                        <NavLink to='/portfolio'><NavText>Portfolio</NavText></NavLink>
                        </NavList>
                        <SliderToggle>{console.log(props.results)}</SliderToggle>
                    </StyledHeader>
                )}
        
        </ThemeContextConsumer>)
}


export {
    Header
    }