import React, { useState, createContext, useEffect } from "react"
import axios from "axios"
import { Redirect } from "react-router-dom"

const UserContext = createContext()

// Construct axios instance that will take the token along on each request
const userAxios = axios.create()
userAxios.interceptors.request.use( config => {
    const token = localStorage.getItem( 'token' )
    config.headers.Authorization = `Bearer ${ token }`
    return config
} )

function UserContextProvider( props ) {
    const initState = {
        user: JSON.parse( localStorage.getItem( "user" ) ) || {},
        token: localStorage.getItem( "token" ) || "",
        issues: [],
        username: "",
        memberSince: null,
        isAdmin: false,
        upvotedIssues: [],
        downvotedIssues: [],
        errMsg: "",
    }
    const initUser = { username: "", password: "" }
    const [userState, setUserState] = useState( initState )
    const [credentials, setCredentials] = useState( initUser )

    // SIGN UP AS A NEW USER
    function signup( e ) {
        e.preventDefault()
        axios
            .post( "/auth/signup", credentials )
            .then( res => {
                const { user, token } = res.data
                localStorage.setItem( "token", token )
                localStorage.setItem( "user", JSON.stringify( user ) )
                setUserState( prevState => ( {
                    ...prevState,
                    user,
                    token,
                } ) )
            } )
            .catch( err => handleAuthErr( err.response.data.errMsg ) )
    }

    // LOGIN IN AS AN EXISTING USER
    function login( e ) {
        e.preventDefault()
        axios
            .post( "/auth/login", credentials )
            .then( res => {
                const { user, token } = res.data
                localStorage.setItem( "token", token )
                localStorage.setItem( "user", JSON.stringify( user ) )
                setUserState( prevState => ( {
                    ...prevState,
                    user,
                    token,
                } ) )
            } )
            .catch( err => handleAuthErr( err.response.data.errMsg ) )
    }


    // LOGOUT AND CLEAR PASSWORD AND TOKEN FROM LOCALSTORAGE ------> WORKING
    function logout( e ) {
        localStorage.removeItem( "token" )
        localStorage.removeItem( "user" )
        setUserState( {
            user: {},
            token: "",
            issues: [],

        } )
    }

    function handleAuthErr( errMsg ) {
        setUserState( prevState => ( {
            ...prevState,
            errMsg
        } ) )
    }


    function resetAuthErr() {
        setUserState( prevState => ( {
            ...prevState,
            errMsg: ""
        } ) )
    }




    useEffect( () => {
        setCredentials( initUser )
    }, [userState] )

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                credentials,
                resetAuthErr,
                setCredentials,
                setUserState,
            }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }
