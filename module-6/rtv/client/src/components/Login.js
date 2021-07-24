import React, { useState, useContext, useEffect } from "react"
import { Redirect } from "react-router"
import {
    FormContainer,
    Main,
    Input,
    InputPair,
    Label,
    ActionButton,
    ActionText,
} from "./StyledComponents"
import { UserContext } from "../context/UserProvider"
// import { fakeAuth } from './ProtectedRoute';

const Login = props => {
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
        <Main>
            <h1>Welcome Back!</h1>
            <FormContainer onSubmit={login}>
                <InputPair>
                    <Label htmlFor="">Username</Label>
                    <Input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                </InputPair>
                <InputPair>
                    <Label htmlFor="">Password</Label>
                    <Input
                        type="text"
                        name="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </InputPair>
                <ActionButton>Login</ActionButton>
                <p style={{ color: "red", textAlign: "right" }}>{errMsg}</p>
            </FormContainer>
            {/* <p>Forgot username or password</p> */}
            <p>
                Don’t have an account?{" "}
                <ActionText to="signup">Signup!</ActionText>
            </p>
        </Main>
    )
}
export default Login
