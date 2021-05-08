import React from 'react'
import {  HeaderUl, HeaderLinks } from './styledComponents'


const navLinks = ['home', 'about', 'sample post', 'contact'];

class NavLink extends React.Component {
    render() {
        return(
        <HeaderUl>
            {navLinks.map(link => 
                <HeaderLinks className="NavLinks">{link}</HeaderLinks>)}
        </HeaderUl>
        )
    }
}

export default NavLink