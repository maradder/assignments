import React, { useState, useEffect, useContext } from "react"
import { UserContext } from "../context/UserProvider"
import {
    IssuesMain,
    RTV,
    UserFeedContainer,
    UserFeedSubContainer,
} from "../components/StyledComponents"
import content from "../content/content"

import Issues from "./Issues"
import NewIssue from "./NewIssue"

const UserFeed = props => {
    const CONTENT = content.userFeed
    const { user, issues } = useContext( UserContext )
    const [issuesWillMount, setIssuesWillMount] = useState( false )
    const [showIssues, setShowIssues] = useState( false )

    useEffect( () => {
        setIssuesWillMount( issues.length > 0 ? true : false )
    }, [issues] )
    return (
        <UserFeedContainer>
            <UserFeedSubContainer >
                <NewIssue />
            </UserFeedSubContainer>
            <UserFeedSubContainer>
                {user.token ? (
                    <Issues />
                ) : (
                    <RTV>
                        <h6
                            style={{
                                textTransform: "capitalize",
                                textAlign: "left",
                            }}>
                            {user.username},
                        </h6>
                        {CONTENT.rtvText}
                    </RTV>
                )}
            </UserFeedSubContainer>
        </UserFeedContainer>
    )
}

export default UserFeed
