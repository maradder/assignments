import styled, { createGlobalStyle } from "styled-components"
import { Link } from "react-router-dom"

const darkTheme = {
	bodyColor:
		"background-image: linear-gradient(to top, #09203f 0%, #537895 100%);",
	// bodyColor: "#333745",
	containerColor: "#333745",
	containerWrapperColor: "#EEF5DB",
	primaryTextColor: "#333745",
	altTextColor: "#EEF5DB",
	alertTextColor: "#FE5F55",
	actionTextColor: "#31AF4B",
	alertButtonColor: "#FE8F88",
	alertButtonHover: "#FE5F55",
	actionButtonColor: "#C5EBCC",
	actionButtonHover: "#31AF4B",
	whiteColor: "#F6EEEE",
}

const lightTheme = {
	bodyColor:
		"background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);",
	// bodyColor: "#F6EEEE",
	containerColor: "#333745",
	containerWrapperColor: "#33374510",
	primaryTextColor: "#333745",
	altTextColor: "#EEF5DB",
	alertTextColor: "#FE5F55",
	actionTextColor: "#31AF4B",
	alertButtonColor: "#FE8F88",
	alertButtonHover: "#FE5F55",
	actionButtonColor: "#C5EBCC",
	actionButtonHover: "#31AF4B",
	whiteColor: "#F6EEEE",
}

const currentTheme = darkTheme

// Global Style
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    align-items: center;
    justify-content: center;
    ${ currentTheme.bodyColor };
    min-height: 100vh;
    max-height: fit-content;
}
`

// Text
const ActionText = styled( Link )`
	color: ${ currentTheme.actionTextColor };
`

const AlertText = styled.p`
	color: ${ currentTheme.alertTextColor };
`

const HeaderContainer = styled.header`
	position: sticky;
	top: -45px;
	height: 45px;
	width: 100vw;
	padding: 4px;
	margin-bottom: 150px;
	border-bottom: 1px solid ${ currentTheme.actionButtonColor };
	background-color: ${ currentTheme.containerWrapperColor };
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	/* background-color: yellow; */

	.div2 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 40vw;
	}

`

/* Main */
const Main = styled.main`
	display: flex;
	flex-direction: column;
	width: 400px;
	margin: auto;
	padding: 75px 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 18px;
	background-color: ${ currentTheme.containerWrapperColor };
	box-shadow: 12px 9px 12px #121212;
`

const IssuesMain = styled( Main )`
	width: 40vw;
	min-width: 400px;
	flex-direction: column;
	background-color: transparent;
	box-shadow: none;
`

const RTV = styled.h1`
	font-family: "Yellowtail", cursive;
	position: fixed;
	top: 30vh;
	right: 20vw;
	transform: rotate(-2deg);
	font-size: 128px;
	color: ${ currentTheme.altTextColor };
	text-shadow: 12px 9px 12px #121212;
	user-select: none;
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
	background-color: ${ currentTheme.actionButtonColor };

	:hover {
		background-color: ${ props =>
		props.disabled
			? currentTheme.actionButtonColor
			: currentTheme.actionButtonHover };
		outline: none;
	}
`

const DeleteOwnIssueButton = styled( Button )`
	width: 33.33333%;
	border-radius: 18px 1px 1px 74px;
	background-color: transparent;
	color: ${ currentTheme.whiteColor };
	/* border: 1px solid ${ currentTheme.whiteColor }; */

	:hover {
		background-color: ${ currentTheme.alertTextColor };
		color: ${ currentTheme.primaryTextColor };
	}
`
const AddOwnCommentButton = styled( ActionButton )`
	width: 33.33333%;
	border-radius: 1px;
	/* border: 1px solid ${ currentTheme.whiteColor }; */
`
const EditOwnIssueButton = styled( Button )`
	width: 33.33333%;
	border-radius: 1px 57px 17px 1px;
	background-color: transparent;
	color: ${ currentTheme.whiteColor };
	/* border: 1px solid ${ currentTheme.whiteColor }; */

	:hover {
		background-color: #e8b828;
		color: ${ currentTheme.primaryTextColor };
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
	background-color: ${ currentTheme.containerColor };
	color: ${ currentTheme.whiteColor };

	h1 {
		border-bottom: 1px solid white;
		margin-bottom: 8px;
		text-transform: capitalize;
	}
`

const FormContainer = styled.form`
	width: 350px;
	height: fit-content;
	padding: 24px;
	border-radius: 18px 57px 17px 74px;

	background-color: ${ currentTheme.containerColor };
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
	width: 100vw;
	justify-content: space-between;

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
	width: 50vw;
	margin: 0 4vw auto 4vw;
	align-items: center;
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
	background-color: #eef5db;
`
const CommentCard = styled.div`
	border: 1px solid white;
	border-radius: 8px;
	width: 100%;
	padding: 16px;
	margin: 16px 0 16px 0;
	background-color: #333745;
	text-transform: capitalize;
`

/* Inputs and Labels */
const Label = styled.label`
	color: ${ currentTheme.whiteColor };
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
}
