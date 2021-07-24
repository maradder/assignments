import React, { useContext } from "react"
import { HeaderContainer, SmallButton } from "./StyledComponents"
import { UserContext } from "../context/UserProvider"

const Header = props => {
    const { logout, user, token } = useContext( UserContext )

    return (
        <HeaderContainer>
            <div className="div1"></div>
            <div
                className="div2">
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
        </HeaderContainer>
    )
}

export default Header
