import React, { useState, useContext, useEffect } from "react"
import { UserContext } from "../context/UserProvider"
import { IssueContext } from "../context/IssueProvider"
import {
    Main,
    FormContainer,
    Label,
    Input,
    InputTextArea,
    InputPair,
    ActionButton,
} from "./StyledComponents"

const NewIssue = props => {
    const { ...userState } = useContext( UserContext )
    const { addIssue, issueAdded } = useContext( IssueContext )
    const initNewIssue = {
        issue: "",
        description: "",
        totalVotes: 0,
        upVotes: 0,
        downVotes: 0,
        comments: [],
        user: userState.user._id,
    }
    const [newIssue, setNewIssue] = useState( initNewIssue )

    const handleChange = e => {
        const { name, value } = e.target
        setNewIssue( prevState => ( {
            ...prevState,
            [name]: value,
        } ) )
    }

    const handleSubmit = e => {
        e.preventDefault()
        addIssue( newIssue )
    }

    useEffect( () => {
        setNewIssue( initNewIssue )
    }, [issueAdded] )

    return (
        <Main>
            {props.children}
            <FormContainer onSubmit={handleSubmit}>
                <InputPair>
                    <Label htmlFor="issue">What's the issue?</Label>
                    <Input
                        name="issue"
                        type="text"
                        onChange={handleChange}
                        value={newIssue.issue}
                    />
                </InputPair>
                <InputPair>
                    <Label htmlFor="description"></Label>
                    <InputTextArea
                        type="textarea"
                        wrap="soft"
                        rows="10"
                        cols="60"
                        name="description"
                        onChange={handleChange}
                        value={newIssue.description}
                    />
                </InputPair>
                <ActionButton type="button" onClick={handleSubmit}>
                    Add Issue
                </ActionButton>
            </FormContainer>
        </Main>
    )
}

export default NewIssue
