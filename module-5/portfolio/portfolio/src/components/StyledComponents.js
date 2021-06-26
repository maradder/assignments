import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { Link } from "react-scroll"
import Tippy from "@tippyjs/react"

const COLOR_NAV_HOVER = "#DFFF00" // Nav hover styling chartreuse
const COLOR_CONTENT_CONTAINER = "#243541"
const COLOR_DISABLED_STATE = "#C1CAD6"
const COLOR_CEMENT = "#DDDCD0"
const COLOR_ROGERS_RED = "#952E2F"
const COLOR_DARK_TEXT = "#121b21"

const textColor = (props) => props.theme.text

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: ${(props) => props.theme.text};
	/* transition: all 0.50s linear; */
}

html {
	scroll-snap-type: both proximity;

}
body {
    /* ${(props) =>
			props.theme === "lightTheme"
				? "background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%); background-blend-mode: screen;"
				: "background-color: black"}; */
			overflow-x: hidden;
			max-height: 100vh;
			max-width:100vw;
			overflow-y: scroll;
			
			
}

.sectionContainer {
	scroll-snap-align: start;

}

h1 {
    font-family: "Lexend Exa", sans-serif;
    font-size: 97px;
    font-weight: 300;
    font-style: normal;
}

h3 {
	font-family: "Montserrat", sans-serif;
    font-size: 48px;
    font-weight: 200;
    font-style: normal;
}

h5 {
    font-family: "Lexend Exa", sans-serif;
    font-size: 24px;
    font-weight: 300;
    font-style: normal;
}

li {
	font-family: "Montserrat", sans-serif;
}

p {
	font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
}

i {
	vertical-align: middle;
}

#tooltip {
  display: inline-block;
  background: #ffffff;
  color: #643045;
  font-weight: bold;
  padding: 5px 10px;
  font-size: 13px;
  border-radius: 4px;
}


button {
    font-family: "Lexend Exa", sans-serif;
    font-size: 14px;
    font-weight: medium;
    text-transform: uppercase;
	color: ${(props) => props.theme.buttonText}
}

@media screen and (max-width: 512px) {
						h1 {
						font-family: "Lexend Exa", sans-serif;
						font-size: 48px;
						font-weight: 300;
						font-style: normal;
					}

					h3 {
						font-family: "Montserrat", sans-serif;
						font-size: 32px;
						font-weight: 200;
						font-style: normal;
					}

					h5 {
						font-family: "Lexend Exa", sans-serif;
						font-size: 16px;
						font-weight: 300;
						font-style: normal;
					}

					p {
						font-family: "Montserrat", sans-serif;
						font-size: 16px;
						font-weight: normal;
						font-style: normal;
					}

					i {
						vertical-align: middle;
					}

					#tooltip {
					display: inline-block;
					background: #ffffff;
					color: #643045;
					font-weight: bold;
					padding: 5px 10px;
					font-size: 13px;
					border-radius: 4px;
					}


					button {
						font-family: "Lexend Exa", sans-serif;
						font-size: 14px;
						font-weight: medium;
						text-transform: uppercase;
						color: ${(props) => props.theme.buttonText}
					}

			}
`

const HeaderNavBox = styled.nav`
	width: 100vw;
	height: 150px;
	margin: 0;
	position: initial;
	flex-wrap: wrap;
	display: flex;
	position: relative;
	top: ${(props) => (props.scroll >= 20 ? "-100px" : "0")};

	flex-direction: column;
	justify-content: center;
	background: ${COLOR_CONTENT_CONTAINER};
	text-align: center;
	z-index: 10;
	box-shadow: 0px 0px 4px ${(props) => props.theme.text};

	ul {
		display: flex;
		flex-direction: row;
		max-height: 20px;
		align-items: center;
		justify-content: center;
		list-style: none;
	}

	li {
		line-height: 16px;
		width: fit-content;
		margin: auto 2.5rem;
		color: azure;
		font-size: 1.6rem;
		font-weight: 200;
		text-decoration-line: none;
		cursor: pointer;
	}

	p {
		font-size: 12px;
		font-weight: 200;
	}

	@media screen and (max-width: 512px) {
		display: none;
	}
`

const NavBox = styled.nav`
	position: fixed;
	top: 11.5rem;
	min-height: fit-content;
	right: ${(props) => (props.scroll >= 60 ? "4.5rem" : "-45rem")};
	display: flex;
	flex-direction: column;
	padding: 16px;
	border-radius: 6px;
	background: ${COLOR_CONTENT_CONTAINER};
	text-align: center;
	z-index: 10;
	box-shadow: 0px 0px 4px ${(props) => props.theme.text};
	display: ;

	ul {
		list-style: none;
	}

	li {
		font-family: "Montserrat", sans-serif;
		font-weight: 200;
		font-size: 24px;
		border-radius: 6px;
		width: 15rem;
		margin: 16px auto;
		color: azure;
	}

	li:hover {
		text-shadow: 0.1rem 0.1rem 1.9rem ${COLOR_NAV_HOVER};
		/* border: 3px solid #952e2fa0; */
		/* box-shadow: 0.1rem 0.1rem 0.7rem 0.6rem #952e2f; */
	}

	@media screen and (max-width: 512px) {
		width: 100vw;
		height: 125px;
		margin: 0;
		position: initial;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;

		ul {
			display: flex;
			flex-direction: row;
			max-height: 20px;
			align-items: center;
			justify-content: center;
		}

		li {
			font-size: 16px;
			line-height: 16px;
			width: fit-content;
			margin: auto 5px;
		}

		p {
			margin: 0 auto;
		}
	}
`
const ToolTip = styled(Tippy)`
	background-color: ${(props) => props.theme.text};
	padding: 4px;
	border-radius: 6px;
	p {
		color: ${(props) => props.theme.buttonText};
	}
`
const GitHubThemed = styled.svg`
	line {
		stroke: ${(props) => props.theme.text};
	}
`
// Profile Section
const ImageContainerRound = styled.div`
	grid-column: 7 / 8;
	grid-row: 3 / 7;
	height: 15rem;
	width: 15rem;
	background-color: #ffffff80;
	border-radius: 50%;
	box-shadow: 0 0 0.5rem 1.2rem ${COLOR_CONTENT_CONTAINER};
	margin: auto;
`
const ProfileImage = styled.img`
	height: 15rem;
	width: 15rem;
	border-radius: 50%;
`
const SocialContainer = styled.div`
	display: flex;
	flex-direction: column;
	grid-column-start: 2;
	grid-row: 3/4;
	height: 20vh;
	border-radius: 6px;
	border: 1px solid #121212;
	align-items: center;
	justify-content: center;
	p {
		color: azure;
		/* color: ${(props) => props.theme.altText}; */
	}
`

const SocialChip = styled.a`
	height: 3rem;
	width: 3rem;
	p {
		color: azure;
		/* color: ${(props) => props.theme.altText}; */
	}
	margin: auto 16px;
	/* background-color: ${COLOR_ROGERS_RED}; */
`

const StyledLink = styled(Link)`
	height: 100%;
	text-decoration-line: none;
	cursor: pointer;
	font-size: 16px;
	line-height: 16px;
	width: fit-content;
	margin: auto 5px;

	@media screen and (max-width: 512px) {
		height: fit-content;
	}
`

const ListItem = styled.li`
	list-style: none;
	height: 100%;
	color: ${(props) => props.theme.textColor};

	:hover {
		text-decoration: underline ${COLOR_NAV_HOVER};
		color: ${COLOR_NAV_HOVER};
	}
`

const Button = styled.button`
	height: 32px;
	width: 96px;
	border-radius: 6px;
	border: none;
	background-color: ${(props) => props.theme.tertiary};
	color: ${(props) => props.theme.buttonText};

	:hover {
		border: 3px solid ${COLOR_NAV_HOVER};
	}
`
const ButtonInverted = styled(Button)`
	background-color: ${(props) => props.theme.contentContainer};
	color: ${(props) => props.theme.altText};

	:hover {
		border: 3px solid ${COLOR_ROGERS_RED};
	}
`

// Abilities Section
const GreenStar = styled.i`
	color: ${COLOR_NAV_HOVER};
	font-size: 24px;
	z-index: 6;
`

const GreyStar = styled.i`
	color: ${COLOR_DISABLED_STATE};
	font-size: 24px;
	z-index: 6;
`

const SectionContainerStyle = styled.div`
	/* position: sticky; */
	/* top: 0; */
	display: flex;
	flex-direction: column;
	row-gap: 24px;
	min-height: 100vh;
	max-height: fit-content;
	width: 100vw;
	max-width: 100vw;
	box-sizing: border-box;
	border: 5px solid #243541a0;
	${(props) => props.theme.background}
	transition: all 0.50s linear;

	.sectionSubDiv {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}

	@media screen and (max-width: 320px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		min-height: 100vh;

		.sectionSubDiv {
			flex-direction: column;
			justify-content: space-evenly;
		}

		.buffer {
			display: none;
		}

		.sectionSubDiv {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
		}
	}
`

const HeroContainer = styled(SectionContainerStyle)`
	display: flex;
	flex-direction: column;
	transition: all 0.5s linear;

	h1 {
		width: 900px;
		height: 120px;
		margin: 40vh auto 0px 4vw;
		background-color: transparent;
		color: ${(props) => props.color};
		/* opacity: ${(props) => props.opacity}; */
		transition: color 2s ease-in;
		animation-duration: 2s;
		animation-name: slideinRight;
	}

	h3 {
		width: 900px;
		height: 100px;
		letter-spacing: 1.28px;
		margin: 0px auto auto 4vw;
		background-color: transparent;
		color: ${(props) => props.color};
		opacity: ${(props) => props.opacity};
		transition: letter-spacing 2s ease-in;
		animation-duration: 5s;
		animation-name: slideinLeft;
	}

	@keyframes slideinRight {
		from {
			margin-left: -100%;
			width: 300%;
		}

		to {
			margin-left: 4vw;
			width: 100%;
		}
	}
	@keyframes slideinLeft {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	@media screen and (max-width: 512px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0;
		min-height: 100vh;

		h1 {
			max-width: 100vw;
			text-align: center;
			height: fit-content;
			margin: 100px auto 0 auto;
			background-color: transparent;
		}

		h3 {
			max-width: 100vw;
			text-align: center;
			height: fit-content;
			letter-spacing: 1.28px;
			margin: 0 auto 100px auto;
			background-color: transparent;
			justify-self: flex-start;
		}
	}
`

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column
	align-items: center;
	justify-content: center;
	height: fit-content;
	width: fit-content;
	padding: 48px;
	border-radius: 6px;
	background-color: ${COLOR_CONTENT_CONTAINER};
	box-shadow: 0px 0px 4px ${(props) => props.theme.text};
	transition: all 0.5s linear;

	h3,
	p {
		color: azure;
		/* color: ${(props) => props.theme.altText}; */
	}

	@media screen and (max-width: 512px) {
		margin: auto;
	}
`

const StyledHeader = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 64px;
	width: 100vw;
	max-width: 100vw;
	background: radial-gradient(#243541, #121b21);
	color: white;
`
const LinkContainer = styled(ContentContainer)`
	@media screen and (min-width: 512px) and (max-width: 1200px) {
		width: 
		margin: auto;
		background-color: pink;
	}
`

// Contact Section
const Input = styled.input`
	height: 40px;
	width: 540px;
	margin-bottom: 24px;
	padding: 0 4px;
	color: ${COLOR_DARK_TEXT};
	font-family: "Montserrat", sans-serif;
	@media screen and (max-width: 512px) {
		height: 40px;
		width: 70vw;
		margin-bottom: 24px;
		padding: 0 4px;
	}
`
const LargeInput = styled.textarea`
	height: 175px;
	max-width: 540px;
	min-width: 540px;
	margin-bottom: 24px;
	word-wrap: break-word;
	padding: 4px;
	color: ${COLOR_DARK_TEXT};
	font-size: 16px;
	font-family: "Montserrat", sans-serif;

	@media screen and (max-width: 512px) {
		height: 175px;
		max-width: 70vw;
		min-width: 70vw;
		margin-bottom: 24px;
		margin-bottom: 24px;
		padding: 0 4px;
	}
`

const Form = styled.form``

export {
	GlobalStyle,
	GreenStar,
	GreyStar,
	ContentContainer,
	LinkContainer,
	ImageContainerRound,
	ProfileImage,
	HeaderNavBox,
	HeroContainer,
	NavBox,
	Input,
	Form,
	textColor,
	LargeInput,
	ToolTip,
	StyledLink,
	ListItem,
	Button,
	ButtonInverted,
	SectionContainerStyle,
	StyledHeader,
	SocialChip,
	SocialContainer,
	ThemeProvider,
	GitHubThemed,
}
