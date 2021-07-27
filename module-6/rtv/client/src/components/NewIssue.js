import React, { useState, useContext, useEffect } from "react"
import { UserContext } from "../context/UserProvider"
import { IssueContext } from "../context/IssueProvider"
import content from "../content/content"
import {
    Main,
    FormContainer,
    Label,
    Input,
    InputTextArea,
    InputPair,
    ActionButton,
    NewIssueMain,
} from "./StyledComponents"

const NewIssue = props => {
    const CONTENT = content.newIssue
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
        <NewIssueMain>
            {props.children}
            <FormContainer onSubmit={handleSubmit}>
                <InputPair>
                    <Label htmlFor="issue">{CONTENT.newIssueGreeting}</Label>
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
                    {CONTENT.addIssueButtonText}
                </ActionButton>
            </FormContainer>
        </NewIssueMain>
    )
}

export default NewIssue
