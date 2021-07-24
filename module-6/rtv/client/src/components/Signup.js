import React, { useState, useContext, useEffect } from 'react';
import { Main, Container, Input, Label, InputPair, ActionButton, FormContainer, ActionText } from './StyledComponents';
import { UserContext } from '../context/UserProvider';


const Signup = props => {
    const { credentials, setCredentials, signup, errMsg, resetAuthErr } = useContext( UserContext )
    const [confirmPw, setConfirmPw] = useState( "" )

    const handleChange = e => {
        const { name, value } = e.target
        setCredentials( prevState => ( {
            ...prevState,
            [name]: value
        } ) )
    }

    const handleConfirm = e => {
        const { name, value } = e.target
        setConfirmPw( prevState => ( {
            ...prevState,
            [name]: value
        } ) )
    }

    useEffect( () => {
        resetAuthErr()
    }, [] )

    return (
        <Main>
            <h1>Sign Up!</h1>
            <FormContainer onSubmit={signup}>
                <InputPair><Label htmlFor="username">Username</Label><Input type="text" name="username" value={credentials.username} onChange={handleChange} /></InputPair>
                <InputPair><Label htmlFor="password">Password</Label><Input type="text" name="password" value={credentials.password} onChange={handleChange} /></InputPair>
                <InputPair><Label htmlFor="confirm_password">Confirm password</Label><Input type="text" name="confirm_password" value={credentials.confirmPw} onChange={handleConfirm} /></InputPair>
                <ActionButton type="submit" disabled={confirmPw.confirm_password === credentials.password ? false : true}>Signup</ActionButton>
                <p style={{ color: "red" }}>{errMsg}</p>
            </FormContainer>
            <p>Already have an account? <ActionText to="/login">Login!</ActionText></p>
        </Main>
    )
}
export default Signup