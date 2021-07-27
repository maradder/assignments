import React, { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import { IssueContext } from "../context/IssueProvider"
import {
    VoteContainer,
    ThumbContainer
} from "./StyledComponents"

const VoteSection = props => {
    const { user } = useContext( UserContext )
    const {
        userUpvote,
        userDownvote,
    } = useContext( IssueContext )
    const issue = props.issue



    return (
        <VoteContainer>
            <ThumbContainer>
                <p>{issue.upVotes}</p>
                <i
                    className="fal fa-thumbs-up"
                    onClick={() => userUpvote( issue._id )}></i>
            </ThumbContainer>
            {user.errMsg === "" ? props.innercontent : <p>{user.errMsg}</p>}
            <ThumbContainer>
                <p>{issue.downVotes}</p>
                <i
                    className="fal fa-thumbs-down"
                    onClick={() => userDownvote( issue._id )}></i>
            </ThumbContainer>
        </VoteContainer>
    )
}

export default VoteSection