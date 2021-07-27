import React, { useContext } from "react"
import { HeaderContainer, SmallButton } from "./StyledComponents"
import { UserContext } from "../context/UserProvider"
import { DisplayContext } from "../context/DisplayProvider"
import { useDarkMode } from "../hooks/useDarkMode"
import { lightTheme, darkTheme, melonTheme, tropicalTheme } from "./Themes"

const Header = props => {
    const { logout, user, token } = useContext( UserContext )
    const { themeState, setThemeState } = useContext( DisplayContext )
    // const { themeToggler } = useDarkMode()

    const handleChange = e => {
        const { value } = e.target
        console.log( value )
        return (
            setThemeState( value )
        )
    }

    return (
        <HeaderContainer>
            <div className="div1">
                <i class={themeState === "light" ? "fad fa-sun" : "fad fa-moon"} onClick={() =>
                    themeState === "light" ? setThemeState( "dark" ) : setThemeState( "light" )
                } />

                <i class="fad fa-dewpoint" onClick={() => setThemeState( "melon" )}></i>
                <i class="fad fa-tree-palm" onClick={() => setThemeState( "tropical" )}></i>

            </div>
            <div className="div2">
                <SmallButton as="select" name="theme" onChange={handleChange}>
                    <option value="light" name="theme">Light</option>
                    <option value="dark" name="theme">Dark</option>
                    <option value="melon" name="theme">Melon</option>
                    <option value="tropical" name="theme">Tropical</option>
                </SmallButton>
            </div>
            <div className="div3">
                {token && (
                    <SmallButton
                        style={{ position: "absolute", right: "5vw" }}
                        type="button"
                        onClick={logout}>
                        Logout
                    </SmallButton>
                )}
            </div>
        </HeaderContainer >
    )
}

export default Header
