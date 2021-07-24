import React, { useState, useContext } from "react"
import { UserContext } from "../context/UserProvider"
import { IssueContext } from "../context/IssueProvider"
import CommentSection from "./CommentSection"
import VoteSection from "./VoteSection"
import {
    Container,
    AddOwnCommentButton,
    EditOwnIssueButton,
    DeleteOwnIssueButton,
    UserButtonsWrapper,
    ActionButton,
    IssueContainer,
    Input,
    InputTextArea,
} from "./StyledComponents"

const IssueCard = props => {
    const { user } = useContext( UserContext )
    const { deleteIssue, updateIssue } = useContext( IssueContext )
    const issue = props.issue
    const commentArray = props.commentArray
    const [showCommentField, setShowCommentField] = useState( false )
    const [editMode, setEditMode] = useState( false )
    const [currentIssue, setCurrentIssue] = useState( issue )

    const toggleEditMode = () => setEditMode( !editMode )

    const handleChange = e => {
        const { name, value } = e.target
        setCurrentIssue( prevState => ( {
            ...prevState,
            [name]: value,
        } ) )
    }

    const cancelEdits = () => {
        setCurrentIssue( {
            ...issue,
            issue: issue.issue,
            description: issue.description,
        } )
        setTimeout( toggleEditMode(), 1500 )
    }

    const saveEdits = () => {
        updateIssue( currentIssue )
        setTimeout( toggleEditMode(), 1500 )
    }

    const issueTitle = (
        <p style={{ textTransform: "capitalize", width: "fit-content" }}>
            Posted by: {issue.username}
        </p>
    )
    const editTitle = (
        <Input
            type="text"
            name="issue"
            value={currentIssue.issue}
            onChange={handleChange}
        />
    )
    return (
        <Container key={props.index}>
            {editMode ? <h1>{editTitle}</h1> : <h1>{issue.issue}</h1>}
            <VoteSection innercontent={issueTitle} issue={currentIssue} />
            <IssueContainer>
                {editMode ? <InputTextArea name="description" value={currentIssue.description} onChange={handleChange} /> : <p>{issue.description}</p>}
            </IssueContainer>

            {showCommentField && (
                <CommentSection issue={issue} commentArray={commentArray} />
            )}

            {user._id !== issue.user &&
                ( showCommentField ? (
                    <ActionButton
                        onClick={() => {
                            setShowCommentField( !showCommentField )
                        }}>
                        Hide Comments
                    </ActionButton>
                ) : (
                    <ActionButton
                        onClick={() => setShowCommentField( !showCommentField )}>
                        Show Comments
                    </ActionButton>
                ) )}
            {user._id === issue.user && (
                <UserButtonsWrapper>
                    <DeleteOwnIssueButton
                        onClick={() => deleteIssue( issue._id )}>
                        Delete
                    </DeleteOwnIssueButton>

                    {showCommentField ? (
                        <AddOwnCommentButton
                            onClick={() => {
                                setShowCommentField( !showCommentField )
                            }}>
                            Hide Comments
                        </AddOwnCommentButton>
                    ) : editMode ? (
                        <AddOwnCommentButton
                            onClick={saveEdits}>
                            Save Edits
                        </AddOwnCommentButton>
                    ) : (
                        <AddOwnCommentButton
                            onClick={() =>
                                setShowCommentField( !showCommentField )
                            }>
                            Show Comments
                        </AddOwnCommentButton>
                    )}

                    {editMode ? (
                        <EditOwnIssueButton onClick={toggleEditMode}>
                            Cancel Edits
                        </EditOwnIssueButton>
                    ) : (
                        <EditOwnIssueButton onClick={cancelEdits}>
                            Edit
                        </EditOwnIssueButton>
                    )}
                </UserButtonsWrapper>
            )}
        </Container>
    )
}

export default IssueCard
