import React, { useState, useContext, useEffect, createContext } from "react"
import axios from "axios"
import { UserContext } from "./UserProvider"

const IssueContext = createContext()
function IssueContextProvider( props ) {
    const { issues, userState, setUserState, upvotedIssues, downvotedIssues } =
        useContext( UserContext )
    const [issueAdded, setIssueAdded] = useState( true )
    const [allComments, setAllComments] = useState( [] )


    //                                                        // 
    //                                                        // 
    //                     CRUD Section                       // 
    //                                                        // 
    //                                                        // 

    // Construct axios instance that will take the token along on each request
    const userAxios = axios.create()
    userAxios.interceptors.request.use( config => {
        const token = localStorage.getItem( "token" )
        config.headers.Authorization = `Bearer ${ token }`
        return config
    } )

    // ADD NEW POST ------> Working on the frontend
    function addIssue( newIssue ) {
        userAxios
            .post( "/api/issues", newIssue )
            .then( res =>
                setUserState( prevState => ( {
                    ...prevState,
                    issues: [...prevState.issues, res.data],
                } ) )
            )
            .catch( err => console.log( err.response.data.errMsg ) )
        setIssueAdded( !issueAdded )
    }

    // GET ALL POSTS CREATED BY ANYONE ------> Working on the frontend
    function getAllIssues() {
        userAxios.get( "/api/issues" ).then( res =>
            setUserState( prevState => ( {
                ...prevState,
                issues: res.data,
            } ) )
        )
    }

    // GET ALL POSTS CREATED BY USER
    function getUserIssues() {
        userAxios.get( "/api/issues" ).then( res =>
            setUserState( prevState => ( {
                ...prevState,
                issues: res.data,
            } ) )
        )
    }

    // EDIT POST CREATED BY USER
    function updateIssue( editedIssue ) {
        const updatedIndex = issues.findIndex( issue => issue._id === editedIssue._id )
        console.log( updatedIndex )
        const updatedIssue = issues[updatedIndex]
        console.log( updatedIssue )
        const untouchedIssues = issues.filter(
            issue => issue._id === editedIssue._id
        )
        console.log( untouchedIssues )
        userAxios
            .put( `/api/issues/${ editedIssue._id }`, editedIssue )
            .then( res => {
                const returnedUpdatedIssue = Object.assign( updatedIssue, res.data )

                setUserState( prevState => ( {
                    ...prevState,
                    issues: [...prevState.issues.slice( 0, updatedIndex ), returnedUpdatedIssue, ...prevState.issues.slice( updatedIndex + 1 )],
                } ) )
            } )
    }


    // DELETE POST CREATED BY USER ------> Working on the frontend
    function deleteIssue( issueId ) {
        userAxios.delete( `/api/issues/${ issueId }` ).then( res => console.log( res ) )
        const remainingIssues = issues.filter(
            filteredIssue => filteredIssue._id !== issueId
        )
        setUserState( prevState => ( {
            ...prevState,
            issues: remainingIssues,
        } ) )
    }



    //                                                        // 
    //                                                        // 
    //                    Voting Section                      // 
    //                                                        // 
    //                                                        // 


    // UPVOTE POST CREATED BY OTHER USER ------> Working on the frontend
    function upvoteIssue( issueId ) {
        const votedIndex = issues.findIndex( issue => issue._id === issueId )
        console.log( votedIndex )
        const votedIssue = issues[votedIndex]
        console.log( votedIssue )
        const untouchedIssues = issues.filter(
            issue => issue._id !== issueId
        )
        console.log( untouchedIssues )
        userAxios
            .put( `/api/issues/upvote/${ issueId }` )
            // .then( res => console.log( res.data ) )
            .then( res => {
                const returnedVotedIssue = Object.assign( votedIssue, res.data )

                setUserState( prevState => ( {
                    ...prevState,
                    issues: [...prevState.issues.slice( 0, votedIndex ), returnedVotedIssue, ...prevState.issues.slice( votedIndex + 1 )],
                    upvotedIssues: [...prevState.upvotedIssues, issueId],
                } ) )
            }
            )
            .catch( err => console.log( err.response.data.errMsg ) )
    }

    // DOWNVOTE POST CREATED BY OTHER USER ------> Working on the frontend
    function downvoteIssue( issueId ) {
        const votedIndex = issues.findIndex( issue => issue._id === issueId )
        console.log( votedIndex )
        const votedIssue = issues[votedIndex]
        console.log( votedIssue )
        const untouchedIssues = issues.filter(
            issue => issue._id !== issueId
        )
        console.log( untouchedIssues )
        userAxios
            .put( `/api/issues/downvote/${ issueId }` )
            // .then( res => console.log( res.data ) )
            .then( res => {
                const returnedVotedIssue = Object.assign( votedIssue, res.data )
                // untouchedIssues.splice( votedIndex, 0, returnedVotedIssue )
                setUserState( prevState => ( {
                    ...prevState,
                    issues: [...prevState.issues.slice( 0, votedIndex ), returnedVotedIssue, ...prevState.issues.slice( votedIndex + 1 )],
                    downvotedIssues: [...prevState.downvotedIssues, issueId],
                } ) )
                // }
                // )
                console.log( returnedVotedIssue.issue )
            } )
            .catch( err => console.log( err.response.data.errMsg ) )
    }


    // CHANGE DOWNVOTE TO UPVOTE POST CREATED BY OTHER USER ------> Working on the frontend
    function chgDownVote2UpVoteIssue( issueId ) {
        const votedIndex = issues.findIndex( issue => issue._id === issueId )
        console.log( votedIndex )
        const votedIssue = issues[votedIndex]
        console.log( votedIssue )
        const untouchedIssues = issues.filter(
            issue => issue._id !== issueId
        )
        console.log( untouchedIssues )

        const oldDownVoteId = downvotedIssues.findIndex(
            item => item === issueId
        )

        // console.log( target )
        userAxios
            .put( `/api/issues/change2upvote/${ issueId }` )
            // .then( res => console.log( res.data ) )
            .then( res => {
                const returnedVotedIssue = Object.assign( votedIssue, res.data )

                setUserState( prevState => ( {
                    ...prevState,
                    issues: [...prevState.issues.slice( 0, votedIndex ), returnedVotedIssue, ...prevState.issues.slice( votedIndex + 1 )],
                    upvotedIssues: [...prevState.upvotedIssues, issueId],
                    downvotedIssues: [
                        ...prevState.downvotedIssues.splice( oldDownVoteId, 1 ),
                    ],
                } ) )
            }
            )
            .catch( err => console.log( err.response.data.errMsg ) )
    }


    // CHANGE UPVOTE TO DOWNVOTE POST CREATED BY OTHER USER ------> Working on the frontend
    function chgUpVote2DownVoteIssue( issueId ) {
        const votedIndex = issues.findIndex( issue => issue._id === issueId )
        console.log( votedIndex )
        const votedIssue = issues[votedIndex]
        console.log( votedIssue )
        const untouchedIssues = issues.filter(
            issue => issue._id !== issueId
        )
        console.log( untouchedIssues )

        const oldUpVoteId = upvotedIssues.findIndex( item => item === issueId )
        // console.log( target )
        userAxios
            .put( `/api/issues/change2downvote/${ issueId }` )
            // .then( res => console.log( res.data ) )
            .then( res => {
                const returnedVotedIssue = Object.assign( votedIssue, res.data )

                setUserState( prevState => ( {
                    ...prevState,
                    issues: [...prevState.issues.slice( 0, votedIndex ), returnedVotedIssue, ...prevState.issues.slice( votedIndex + 1 )],
                    upvotedIssues: [
                        ...prevState.upvotedIssues.splice( oldUpVoteId, 1 ),
                    ],
                    downvotedIssues: [...prevState.downvotedIssues, issueId],
                } ) )
            }
            )
            .catch( err => console.log( err.response.data.errMsg ) )
    }

    // TEST TO SEE IF THE USER HAS ALREADY VOTED ON THE ISSUE ------> Working on the frontend
    function userUpvote( issueId ) {
        const didUpVote = upvotedIssues.includes( issueId )
        const didDownVote = downvotedIssues.includes( issueId )
        didUpVote
            ? console.log( "You've already upvoted this issue" )
            : didDownVote
                ? chgDownVote2UpVoteIssue( issueId )
                : upvoteIssue( issueId )
    }

    // TEST TO SEE IF THE USER HAS ALREADY VOTED ON THE ISSUE ------> Working on the frontend
    function userDownvote( issueId ) {
        const didUpVote = upvotedIssues.includes( issueId )
        const didDownVote = downvotedIssues.includes( issueId )
        didDownVote
            ? console.log( "You've already downvoted this issue" )
            : didUpVote
                ? chgUpVote2DownVoteIssue( issueId )
                : downvoteIssue( issueId )
    }


    //                                                        // 
    //                                                        // 
    //                    Comment Section                     // 
    //                                                        // 
    //                                                        // 

    // ADD NEW COMMENT -----> Working on the frontend
    function addComment( newComment ) {
        userAxios
            .post( `/api/comments/`, newComment )
            .then( res => {
                return (
                    setAllComments( prevState => ( [
                        ...prevState,
                        res.data
                    ] )
                    ) )
            } )
            .catch( err => console.log( err.response.data.errMsg ) )
    }

    // GET ALL COMMENTS CREATED BY ANYONE ------> Working on the frontend
    function getAllComments() {
        userAxios.get( "/api/comments" ).then( res =>
            setAllComments( prevState => ( [
                ...prevState,
                ...res.data
            ] ) )
        )
    }

    // EDIT COMMENT CREATED BY USER
    function updateComment( editedComment ) {
        userAxios
            .put( `/api/comments/${ editedComment._id }`, editedComment )
            .then( res => console.log( res ) )
    }
    // DELETE COMMENT CREATED BY USER
    function deleteComment( commentId ) {
        userAxios
            .delete( `/api/comments/${ commentId }` )
            .then( res => console.log( res ) )
    }


    //                                                        // 
    //                                                        // 
    //                  UseEffect Section                     // 
    //                                                        // 
    //                                                        // 


    useEffect( () => {
        getAllIssues()
        getAllComments()
    }, [] )



    return (
        <IssueContext.Provider
            value={{
                addIssue,
                issueAdded,
                getAllIssues,
                getUserIssues,
                getAllComments,
                allComments,
                updateIssue,
                deleteIssue,
                upvoteIssue,
                downvoteIssue,
                userUpvote,
                userDownvote,
                addComment,
                updateComment,
                deleteComment,
            }}>
            {props.children}
        </IssueContext.Provider>
    )
}

export { IssueContext, IssueContextProvider }
