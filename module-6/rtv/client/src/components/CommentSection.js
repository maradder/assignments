import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { IssueContext } from "../context/IssueProvider"
import {
    InputTextArea,
    ActionButton,
    CommentContainer,
    CommentContentContainer,
    CommentCard
} from "./StyledComponents"


const CommentSection = props => {
    const { user } = useContext( UserContext )
    const {
        addComment,
    } = useContext( IssueContext )
    const issue = props.issue

    const initComment = {
        comment: "",
        userId: user._id,
        issueId: issue._id,
        username: user.username,
    }
    const [newComment, setNewComment] = useState( initComment )
    // const [thisIssueComments, setThisIssueComments] = useState( [] )

    const handleChange = e => {
        const { name, value } = e.target
        setNewComment( prevState => ( {
            ...prevState,
            [name]: value,
        } ) )
    }

    return (
        <CommentContainer>
            <h3>Comments</h3>
            <CommentContentContainer>
                <InputTextArea
                    name="comment"
                    value={newComment.comment}
                    onChange={handleChange}
                />
                <ActionButton
                    onClick={() => {
                        addComment( newComment )
                    }}>
                    Save Comment
                </ActionButton>

                {props.commentArray.map( comment => {
                    return (
                        <CommentCard>
                            <p>{comment.username} said:</p>
                            <p>{comment.comment}</p>
                        </CommentCard>
                    )
                } )}
            </CommentContentContainer>
        </CommentContainer>
    )
}

export default CommentSection