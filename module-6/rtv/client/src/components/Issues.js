import React, { useContext, useEffect } from "react"
import { IssuesMain } from "./StyledComponents"
import IssueCard from "./IssueCard"
import { UserContext } from "../context/UserProvider"
import { IssueContext } from "../context/IssueProvider"

const Issues = props => {
    const { issues, user } = useContext( UserContext )
    const { getAllIssues, allComments, getAllComments } =
        useContext( IssueContext )

    const getComments = obj => {
        return allComments.filter( comment => comment.issueId === obj )
    }
    const renderIssues = () => {
        const sortableIssues = issues
        // sortableIssues.sort( ( a, b ) => a.upVotes - b.upVotes )
        const results = sortableIssues.map( ( issue, index ) => {
            const commentsThisIssue = getComments( issue._id )
            console.log( commentsThisIssue )
            return (
                <IssueCard
                    issue={issue}
                    index={index}
                    commentArray={commentsThisIssue}>
                </IssueCard>
            )
        } )
        return results
    }

    useEffect( () => {
        getAllIssues()
    }, [user || issues] )

    return <IssuesMain>{renderIssues()}</IssuesMain>
}

export default Issues
