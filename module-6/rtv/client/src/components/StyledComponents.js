import styled, { createGlobalStyle } from "styled-components"
import { Link } from "react-router-dom"

// Global Style
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
	max-width: 100vw;
    font-family: 'Roboto', sans-serif;
    align-items: center;
    justify-content: center;
    ${ ( { theme } ) => theme.bodyColor };
    min-height: 100vh;
    max-height: fit-content;
}

#root {
	min-width: fit-content;
}
`

// Text
const ActionText = styled( Link )`
	color: ${ ( { theme } ) => theme.actionTextColor };
`

const AlertText = styled.p`
	color: ${ ( { theme } ) => theme.alertTextColor };
`

const HeaderContainer = styled.header`
	height: 45px;
	width: 100vw;
	padding: 4px;
	border-bottom: 1px solid ${ ( { theme } ) => theme.actionButtonColor };
	background-color: ${ ( { theme } ) => theme.containerColor };
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	/* background-color: yellow; */

	.div1 {
		min-width: fit-content;
		width: 10vw;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.div2 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 40vw;
	}

	.div3 {
		min-width: fit-content;
		width: 50vw;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	i {
		margin: 0 0 0 16px;
		font-size: 32px;
	}

	i:hover {
		cursor: pointer;
	}

	.fa-sun {
		color: ${ ( { theme } ) => theme.sun };
	}

	.fa-moon {
		color: ${ ( { theme } ) => theme.moon };
	}

	.fa-dewpoint {
		color: ${ ( { theme } ) => theme.melon };
	}

	.fa-tree-palm {
		color: ${ ( { theme } ) => theme.palm };
	}

	@media screen and (max-width: 1000px) {
		margin-bottom: 75px;
	}
`

const getWidth = document.addEventListener( "resize", () => window.innerWidth )
// const getHeight = document.addEventListener( "resize", () => window.innerHeight )
const halfway = getWidth / 2 - 200
const midway = window.innerHeight / 2 - 300

/* Main */
const Main = styled.main`
	display: flex;
	flex-direction: column;
	width: 400px;
	margin: unset;
	padding: 75px 25px;
	display: flex;
	align-items: center;
	justify-self: center;
	justify-content: center;
	border-radius: 18px;
	background-color: ${ ( { theme } ) => theme.containerWrapperColor };
	/* background-color: pink; */
	box-shadow: 12px 9px 12px #121212;
`

const AuthMain = styled( Main )`
	position: initial;
	margin: ${ midway }px auto;
`

const NewIssueMain = styled( Main )`
	position: initial;
	display: flex;
	flex-direction: column;
	width: 400px;
	margin: auto;
	padding: 75px 25px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: 1000) {
		margin-top: 15vh	;

	}
`

const IssuesMain = styled( Main )`
	width: 40vw;
	min-width: 400px;
	flex-direction: column;
	background-color: transparent;
	box-shadow: none;
	margin: 0 auto;

	/* @media screen and (min-width: 1000px) {
		position: initial;
	} */
`

const RTV = styled.h1`
	font-family: "Yellowtail", cursive;
	/* position: fixed;
	inset: 30vh 20vw auto auto; */
	/* top: 30vh; */
	/* right: 20vw; */
	transform: rotate(-2deg);
	font-size: 128px;
	margin: auto 0;
	color: ${ ( { theme } ) => theme.containerColor };
	text-shadow: 12px 9px 12px ${ ( { theme } ) => theme.containerWrapperColor };
	user-select: none;

	@media screen and (max-width: 700px) {
		font-size: 96px;

	}

	/* @media screen and (max-width: 1475px) {
		inset: 5vh auto;
	} */
`

/* Buttons */
const Button = styled.button`
	width: 100%;
	height: 42px;
	border-radius: 18px 57px 17px 74px;

	:hover {
		cursor: pointer;
	}
`

const ActionButton = styled( Button )`
	background-color: ${ ( { theme } ) => theme.actionButtonColor };

	:hover {
		background-color: ${ props =>
		props.disabled
			? ( { theme } ) => theme.actionButtonColor
			: ( { theme } ) => theme.actionButtonHover };
		outline: none;
	}
`

const DeleteOwnIssueButton = styled( Button )`
	width: 33.33333%;
	border-radius: 18px 1px 1px 74px;
	background-color: transparent;
	color: ${ ( { theme } ) => theme.whiteColor };
	/* border: 1px solid ${ ( { theme } ) => theme.whiteColor }; */

	:hover {
		background-color: ${ ( { theme } ) => theme.alertTextColor };
		color: ${ ( { theme } ) => theme.primaryTextColor };
	}
`
const AddOwnCommentButton = styled( ActionButton )`
	width: 33.33333%;
	border-radius: 1px;
	/* border: 1px solid ${ ( { theme } ) => theme.whiteColor }; */
`
const EditOwnIssueButton = styled( Button )`
	width: 33.33333%;
	border-radius: 1px 57px 17px 1px;
	background-color: transparent;
	color: ${ ( { theme } ) => theme.whiteColor };
	/* border: 1px solid ${ ( { theme } ) => theme.whiteColor }; */

	:hover {
		background-color: #e8b828;
		color: ${ ( { theme } ) => theme.primaryTextColor };
	}
`

const UserButtonsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	border-radius: 18px 57px 17px 74px;
	border: 1px solid;
`

const SmallButton = styled.button`
	width: 91px;
	height: 32px;
	border-radius: 18px 57px 17px 74px;
	padding: 0 0 0 24px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	:hover {
		background-color: #727272;
		color: #ffffff;
		cursor: pointer;
	}
`

/* Input Fields */

/* Containers */
const Container = styled.div`
	width: 100%;
	/* width: 350px; */
	height: fit-content;
	padding: 24px;
	margin: 32px auto;
	display: flex;
	align-items: center;
	flex-direction: column;
	border-radius: 18px 57px 17px 74px;
	background-color: ${ ( { theme } ) => theme.containerColor };
	color: ${ ( { theme } ) => theme.whiteColor };
	box-shadow: 12px 9px 12px #121212;

	h1 {
		border-bottom: 1px solid white;
		margin-bottom: 8px;
		text-transform: capitalize;
	}
`

const FormContainer = styled.form`
	position: initial;
	width: 350px;
	height: fit-content;
	padding: 24px;
	border-radius: 18px 57px 17px 74px;

	background-color: ${ ( { theme } ) => theme.containerColor };
`

const VoteContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	margin: 0;
`

const ThumbContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: fit-content;
	width: max-content;
	padding: 8px;
	margin: 16px 0;
	border: 1px solid white;
	border-radius: 8px;

	i,
	p {
		margin: 0 4px;
	}

	:hover {
		cursor: pointer;
	}
`

const IssueContainer = styled.div`
	border: 1px solid white;
	border-radius: 8px;
	width: 100%;
	padding: 16px;
	margin: 0 0 16px 0;
	background-color: #eef5db;

	p {
		word-wrap: true;
		width: 100%;
		color: #333745;
	}
`

const UserFeedContainer = styled.div`
	display: flex;
	flex-direction: row;
	min-width: fit-content;
	width: 100vw;
	min-height:100%;
	justify-content: space-between;
	/* background-color: honeydew; */

	@media screen and (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
		margin: auto 0;
	}
`

const UserFeedSubContainer = styled.div`
	/* position: fixed; */
	display: flex;
	flex-direction: column;
	min-height: fit-content;
	width: fit-content;
	min-height: fit-content;
	height: 100vh;
	margin: auto;
	align-items: center;
	/* background-color: peachpuff; */

	@media screen and (max-width: 1000px) {
		flex-direction: column-reverse;
		align-items: center;
		margin: auto;
	}
`

const CommentContainer = styled.div`
	margin: 16px 0 0 0;
	width: 100%;
	height: fit-content;

	h3 {
		text-align: center;
	}
`

const CommentContentContainer = styled.div`
	border: 1px solid white;
	border-radius: 8px;
	width: 100%;
	height: fit-content;
	max-height: 250px;
	overflow-y: scroll;
	padding: 16px;
	margin: 16px 0 16px 0;
	background-color: ${ ( { theme } ) => theme.altAccentColor };
	/* background-color: #eef5db; */
`
const CommentCard = styled.div`
	border: 1px solid white;
	border-radius: 8px;
	width: 100%;
	padding: 16px;
	margin: 16px 0 16px 0;
	background-color: ${ ( { theme } ) => theme.containerColor };
	text-transform: capitalize;
`

/* Inputs and Labels */
const Label = styled.label`
	color: ${ ( { theme } ) => theme.whiteColor };
`

const Input = styled.input`
	border-radius: 3px;
	height: 22px;
	padding: 0 8px;

	:hover {
		border: 1px solid chartreuse;
		height: 22px;
	}

	:active {
		border: 1px solid chartreuse;
		height: 22px;
		outline: chartreuse solid 1px;
	}
`

const InputTextArea = styled( Input )`
	height: 65px;
	min-height: 65px;
	display: flex;
	flex-direction: row;
	align-items: top;
	min-width: 100%;
	max-width: 100%;
	word-wrap: true;
	margin: 0 0 8px 0;
`

const InputPair = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	width: 100%;
	margin-bottom: 16px;
`

const TogglerDiv = styled.div`
	min-height: 75px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export {
	GlobalStyle,
	ActionText,
	ActionButton,
	AddOwnCommentButton,
	EditOwnIssueButton,
	DeleteOwnIssueButton,
	AlertText,
	Button,
	SmallButton,
	Container,
	HeaderContainer,
	Label,
	Input,
	RTV,
	InputTextArea,
	InputPair,
	FormContainer,
	Main,
	IssuesMain,
	VoteContainer,
	ThumbContainer,
	CommentContainer,
	IssueContainer,
	CommentCard,
	UserButtonsWrapper,
	CommentContentContainer,
	UserFeedContainer,
	UserFeedSubContainer,
	TogglerDiv,
	AuthMain,
	NewIssueMain,
}
