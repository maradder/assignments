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
	transition: all 0.50s linear;
}


body {
    ${(props) =>
			props.theme === "lightTheme"
				? "background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%); background-blend-mode: screen;"
				: "background-color: black"};
			overflow-x: hidden;
			max-width:100vw;
			
			
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

@media screen and (max-width: 500px) {
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
	position: fixed;
	top: 0;
	width: 100vw;
	height: 125px;
	margin: 0;
	position: initial;
	display: flex;
	flex-wrap: wrap;
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
`

const NavBox = styled.nav`
	position: fixed;
	top: 11.5rem;
	min-height: fit-content;
	right: 4.5rem;
	display: grid;
	grid-template-columns: 15rem;
	grid-template-rows: 3.5rem 5rem 5rem 5rem 5rem 5rem 2.5rem;
	border-radius: 6px;
	background: ${COLOR_CONTENT_CONTAINER};
	text-align: center;
	z-index: 10;
	box-shadow: 0px 0px 4px ${(props) => props.theme.text};

	ul {
		list-style: none;
	}

	li {
		font-family: "Montserrat", sans-serif;
		font-weight: 200;
		font-size: 1.6rem;
		border-radius: 6px;
		margin: auto;
		line-height: 4.5rem;
		width: 15rem;
		color: azure;
	}

	li:hover {
		text-shadow: 0.1rem 0.1rem 1.9rem ${COLOR_NAV_HOVER};
		/* border: 3px solid #952e2fa0; */
		/* box-shadow: 0.1rem 0.1rem 0.7rem 0.6rem #952e2f; */
	}

	@media screen and (max-width: 500px) {
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
`

const SocialChip = styled.a`
	height: 3rem;
	width: 3rem;
	color: ${COLOR_CEMENT};
	margin: auto;
	/* background-color: ${COLOR_ROGERS_RED}; */
`

const StyledLink = styled(Link)`
	height: 5rem;
	text-decoration-line: none;
	cursor: pointer;

	@media screen and (max-width: 500px) {
		height: fit-content;
	}
`

const ListItem = styled.li`
	list-style: none;
	height: 100%;

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
	display: grid;
	grid-template-columns: repeat(12, 8.33vw);
	grid-template-rows: repeat(auto, 10vh);
	gap: 24px;
	min-height: 100vh;
	max-height: fit-content;
	width: 100vw;
	max-width: 100vw;
	box-sizing: border-box;
	border: 5px solid #243541a0;
	${(props) => props.theme.background}

	@media screen and (max-width: 500px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		min-height: 100vh;
	}
`

const ContentContainer = styled.div`
	grid-row-start: ${(props) => props.gridrowstart};
	grid-column-start: ${(props) => props.gridcolumnstart};
	height: fit-content;
	width: fit-content;
	padding: 48px;
	border-radius: 6px;
	background-color: ${COLOR_CONTENT_CONTAINER};
	box-shadow: 0px 0px 4px ${(props) => props.theme.text};

	p {
		color: ${(props) => props.theme.altText};
	}

	@media screen and (max-width: 500px) {
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

// Contact Section
const inputWidth = "540px"
const Input = styled.input`
	height: 40px;
	width: ${inputWidth};
	margin-bottom: 24px;
	padding: 0 4px;
	color: ${COLOR_DARK_TEXT};
	font-family: "Montserrat", sans-serif;

	@media screen and (max-width: 500px) {
		height: 40px;
		width: 70vw;
		margin-bottom: 24px;
		padding: 0 4px;
	}
`
const LargeInput = styled.textarea`
	height: 175px;
	max-width: ${inputWidth};
	min-width: ${inputWidth};
	margin-bottom: 24px;
	word-wrap: break-word;
	padding: 4px;
	color: ${COLOR_DARK_TEXT};
	font-size: 16px;
	font-family: "Montserrat", sans-serif;

	@media screen and (max-width: 500px) {
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
	ImageContainerRound,
	ProfileImage,
	HeaderNavBox,
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
