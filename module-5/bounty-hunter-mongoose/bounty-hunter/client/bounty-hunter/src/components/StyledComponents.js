import styled, { createGlobalStyle } from "styled-components"
import AurebeshCondensed from "../fonts/AurebeshCondensed.otf"

const neonYellow = "#cfff04"

const GlobalStyle = createGlobalStyle`
	body {
		background-color: #121212;
	}
	min-height: 100vh;
	min-width: 100vw;
	@font-face {
		font-family: "AurebeshCondensed";
		src: url(${AurebeshCondensed});
	}

	h2 {
		font-size: 25px;
		font-weight: 200;
		font-family: "AurebeshCondensed";

	}

	h3 {
		font-size: 20px;
		font-weight: 200;
		font-family: "AurebeshCondensed";

	}

	h5 {
		font-size: 16px;
		font-weight: 200;
		font-family: "AurebeshCondensed";

	}
	
	p {
		font-size: 16px;
		font-weight: 200;
		font-family: "AurebeshCondensed";

	}

	h1:hover, h2:hover, h3:hover, h5:hover, p:hover, input:hover
		 {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
			Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

		 }


`

const Card = styled.div`
	margin: 25px 75px auto 75px;
	height: 250px;
	width: 450px;
	padding: 25px;
	border-radius: 16px 16px 50px 16px;
	background-color: ${neonYellow};
`

const CardOverlay = styled.div`
	position: relative;
	top: -25px;
	left: -25px;
	height: 300px;
	width: 500px;
	border-radius: 16px 16px 50px 16px;
	background: linear-gradient(
		37deg,
		#ffffff32 25%,
		#ffffff70 50%,
		#ffffffa0 75%
	);
`

const CardContent = styled.div`
	position: relative;
	top: -325px;
	height: 250px;
	width: 450px;
	border-radius: 16px 16px 50px 16px;
	color: #121212;

	form {
		display: flex;
		flex-direction: column;
	}

	input {
		color: #121212;
	}
`

const BountyList = styled.div`
	overflow-y: scroll;
	scrollbar-3dlight-color: none;
	scrollbar-arrow-color: none;
	scrollbar-base-color: none;
	scrollbar-darkshadow-color: none;
	scrollbar-face-color: none;
	scrollbar-highlight-color: none;
	scrollbar-shadow-color: none;
	scrollbar-track-color: none;
	min-height: 100vh;

	:last-child {
		margin-bottom: 100px;
	}

	margin-left: 45px;
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 350px;
	height: 250px;
	margin: auto;
	position: fixed;
	top: 100px;
	right: 100px;
`

const Input = styled.input`
	text-align: ${(props) => (props.focusState === true ? "center" : "left")};
	font-family: ${(props) =>
		props.focusState === true ? "sans-serif" : "sans-serif"};
	font-weight: 200;
	font-size: 20px;
	color: #f2f2f2;
	width: 100%;
	height: 24px;
	margin: 10px auto;
	border-radius: 9px;
	border: none;
	border-bottom: ${(props) =>
		props.focusState === true ? "2px solid #cfff04bb" : "none"};
	outline: none;
	background-color: transparent;

	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: #f2f2f2;
		opacity: 1; /* Firefox */
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: #f2f2f2;
	}

	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: #f2f2f2;
	}
`

const BountyType = styled.h3`
	display: flex;
	text-transform: capitalize;
	min-width: 100%;
`

const HeaderContainer = styled.header`
	height: 80px;
	width: 100vw;
	background: linear-gradient(
		37deg,
		#ffffff32 25%,
		#ffffff70 50%,
		#ffffffa0 75%
	);
	background-color: ${neonYellow};
`
const H1 = styled.h1`
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	font-style: italic;
	margin: 0 0 0 120px;
	font-size: 48px;
`

const FooterContainer = styled.footer`
	height: 80px;
	width: 100vw;
	background-color: yellow;
`

const MainContainer = styled.main`
	position: fixed;
	height: 100vh;
	overflow: hidden;
	overflow-y: scroll;
	width: 100vw;
	background-color: #121212;
	background-image: url("https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
	background-size: cover;
	background-position: -45px;
	background-repeat: no-repeat;
`

const Button = styled.button`
	height: 32px;
	width: fit-content;
	padding: 8px 16px;
	border: none;
	border-radius: 16px 16px 50px 16px;
`

const DeleteButton = styled(Button)`
	border: none;
	background-color: transparent;
	color: #fe0834aa;
`

const EditButton = styled(Button)`
	border: 1px solid ${neonYellow};
	background-color: #2c282e60;
	color: #000000;
`

const SaveButton = styled(Button)`
	border: 1px solid ${neonYellow};
	background-color: #2ab26a;
	color: #000000;
`

export {
	GlobalStyle,
	BountyType,
	Card,
	CardContent,
	CardOverlay,
	DeleteButton,
	EditButton,
	SaveButton,
	BountyList,
	Button,
	Form,
	H1,
	HeaderContainer,
	Input,
	FooterContainer,
	MainContainer,
}
