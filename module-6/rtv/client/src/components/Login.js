import React, { useState, useContext, useEffect } from "react"
import { Redirect } from "react-router"
import content from "../content/content"
import {
    FormContainer,
    Main,
    Input,
    InputPair,
    Label,
    ActionButton,
    AuthMain,
    ActionText,
} from "./StyledComponents"
import { UserContext } from "../context/UserProvider"
// import { fakeAuth } from './ProtectedRoute';

const Login = props => {
    const CONTENT = content.authentication.login
    const { credentials, setCredentials, login, errMsg, resetAuthErr } =
        useContext( UserContext )
    const [redirectToReferrer, setRedirectToReferrer] = useState( false )
    const handleChange = e => {
        const { name, value } = e.target
        setCredentials( prevState => ( {
            ...prevState,
            [name]: value,
        } ) )
    }

    useEffect( () => {
        resetAuthErr()
    }, [] )

    return (
        <AuthMain>
            <h1>{CONTENT.loginGreeting}</h1>
            <FormContainer onSubmit={login}>
                <InputPair>
                    <Label htmlFor="">
                        {CONTENT.usernameLabel}
                    </Label>
                    <Input
                        type="text"
                        name="username"
                        placeholder={
                            CONTENT.usernamePlaceholder
                        }
                        value={credentials.username}
                        onChange={handleChange}
                    />
                </InputPair>
                <InputPair>
                    <Label htmlFor="">
                        {CONTENT.passwordLabel}
                    </Label>
                    <Input
                        type="text"
                        name="password"
                        placeholder={
                            CONTENT.passwordPlaceholder
                        }
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </InputPair>
                <ActionButton>
                    {CONTENT.loginButtonText}
                </ActionButton>
                <p style={{ color: "red", textAlign: "right" }}>{errMsg}</p>
            </FormContainer>
            {/* <p>Forgot username or password</p> */}
            <p>
                {CONTENT.registrationPrompt}{" "}
                <ActionText to="signup">
                    {CONTENT.registrationLinkText}
                </ActionText>
            </p>
        </AuthMain>
    )
}
export default Login
