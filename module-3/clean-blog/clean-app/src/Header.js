import React from 'react'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import NavLink from './NavLink.js'
import { HeaderBrandText, HeaderStyled } from './styledComponents'



class Header extends React.Component {
    render() {
        return (
            <HeaderStyled> 
                <HeaderBrandText href="./index.html">Start Bootstrap</HeaderBrandText>
                <NavLink />
                {/* <Button
                    variant="contained"
                    color="primary"
                    endIcon={MenuIcon} /> */}
            </HeaderStyled>
        )
    }
}

export default Header