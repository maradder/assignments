import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { IssuesMain, RTV, UserFeedContainer, UserFeedSubContainer } from "../components/StyledComponents"

import Issues from './Issues';
import NewIssue from './NewIssue';

const UserFeed = props => {
    const { user, issues } = useContext( UserContext )
    const [issuesWillMount, setIssuesWillMount] = useState( false )
    const [showIssues, setShowIssues] = useState( false )

    useEffect( () => {
        setIssuesWillMount( issues.length > 0 ? true : false )
    }, [issues] )
    return (
        <UserFeedContainer>
            <UserFeedSubContainer style={{}}>

                <NewIssue />
            </UserFeedSubContainer>
            <UserFeedSubContainer>
                {issuesWillMount ? <Issues /> : <RTV style={{ right: "17vw" }} ><h6 style={{ textTransform: "capitalize", textAlign: "left" }}>{user.username},</h6>Rock the Vote</RTV>}
            </UserFeedSubContainer>
        </UserFeedContainer>
    )
}

export default UserFeed