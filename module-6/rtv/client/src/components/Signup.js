import React, { useState, useContext, useEffect } from "react"
import {
    Main,
    Container,
    Input,
    Label,
    InputPair,
    ActionButton,
    FormContainer,
    ActionText,
    AuthMain,
} from "./StyledComponents"
import { UserContext } from "../context/UserProvider"
import content from "../content/content"

const Signup = props => {
    const { credentials, setCredentials, signup, errMsg, resetAuthErr } =
        useContext( UserContext )
    const [confirmPw, setConfirmPw] = useState( "" )
    const CONTENT = content.authentication.registration

    const handleChange = e => {
        const { name, value } = e.target
        setCredentials( prevState => ( {
            ...prevState,
            [name]: value,
        } ) )
    }

    const handleConfirm = e => {
        const { name, value } = e.target
        setConfirmPw( prevState => ( {
            ...prevState,
            [name]: value,
        } ) )
    }

    useEffect( () => {
        resetAuthErr()
    }, [] )

    return (
        <AuthMain>
            <h1>{CONTENT.registrationGreeting}</h1>
            <FormContainer onSubmit={signup}>
                <InputPair>
                    <Label htmlFor="username">{CONTENT.usernameLabel}</Label>
                    <Input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        placeholder={content.usernamePlaceholder}
                    />
                </InputPair>
                <InputPair>
                    <Label htmlFor="password">{CONTENT.passwordLabel}</Label>
                    <Input
                        type="text"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder={content.passwordPlaceholder}
                    />
                </InputPair>
                <InputPair>
                    <Label htmlFor="confirm_password">
                        {CONTENT.confirmPasswordLabel}
                    </Label>
                    <Input
                        type="text"
                        name="confirm_password"
                        value={credentials.confirmPw}
                        onChange={handleConfirm}
                        placeholder={content.confirmPasswordPlaceholder}
                    />
                </InputPair>
                <ActionButton
                    type="submit"
                    disabled={
                        confirmPw.confirm_password === credentials.password
                            ? false
                            : true
                    }>
                    {CONTENT.registrationButtonText}
                </ActionButton>
                <p style={{ color: "red" }}>{errMsg}</p>
            </FormContainer>
            <p>
                {CONTENT.loginPrompt}
                <ActionText to="/login">{CONTENT.loginLinkText}</ActionText>
            </p>
        </AuthMain>
    )
}
export default Signup
