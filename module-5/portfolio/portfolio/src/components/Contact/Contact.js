import React, { useState, useContext } from "react"
import SectionContainer from "../SectionContainer"
import {
	SocialChip,
	ContentContainer,
	LinkContainer,
	Form,
	Input,
	LargeInput,
	Button,
	ButtonInverted,
	ToolTip,
} from "../StyledComponents"
import GitHub from "./img/GitHub-Mark-64px.svg"
import GitHubLight from "./img/GitHub-Mark-Light-64px.png"
import LinkedIn from "./img/LI-In-Bug.png"
import { Context } from "../../context/context"
// import Tippy from "@tippyjs/react"

// import "tippy.js/dist/tippy.css" // optional

const Contact = React.forwardRef((props, ref) => {
	const { themeState } = useContext(Context)
	const initMessage = {
		name: "",
		email: "",
		subject: "",
		message: "",
	}
	const [emailMessage, setEmailMessage] = useState(initMessage)

	const handleChange = (e) => {
		const { name, value } = e.target
		setEmailMessage((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleClear = () => {
		return setEmailMessage(initMessage)
	}
	return (
		<SectionContainer
			heading="Contact"
			id="contact"
			ref={ref}
			className="sectionContainer"
		>
			<ContentContainer
				gridrowstart={3}
				gridcolumnstart={4}
				style={{ marginBottom: "75px" }}
			>
				<Form onSubmit={() => console.log(emailMessage)}>
					<label htmlFor="name">
						<p>Name</p>
						<Input
							onChange={handleChange}
							type="text"
							name="name"
							value={emailMessage.name}
							placeholder="Name"
						/>
					</label>
					<label htmlFor="email">
						<p>Email Address</p>
						<Input
							onChange={handleChange}
							type="email"
							name="email"
							value={emailMessage.email}
							placeholder="Email Address"
						/>
					</label>
					<label htmlFor="subject">
						<p>Subject</p>
						<Input
							onChange={handleChange}
							type="text"
							name="subject"
							value={emailMessage.subject}
							placeholder="Subject"
						/>
					</label>
					<label htmlFor="message">
						<p>Message</p>
						<LargeInput
							onChange={handleChange}
							type="text"
							name="message"
							value={emailMessage.message}
							placeholder="Message"
						/>
					</label>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<ButtonInverted type="button" onClick={handleClear}>
							Clear
						</ButtonInverted>
						<Button type="submit">Send</Button>
					</div>
				</Form>
			</ContentContainer>
			<LinkContainer>
				<ToolTip content={<p className="gold">Connect with me on LinkedIn</p>}>
					<SocialChip
						id="linkedIn"
						href="https://www.linkedin.com/in/marcusradder/"
					>
						<img
							src={`${LinkedIn}`}
							alt="Link to LinkedIn"
							style={{ height: "48px", margin: "auto" }}
						/>
					</SocialChip>
				</ToolTip>
				<ToolTip content={<p>See my code on GitHub</p>}>
					<SocialChip href="https://github.com/maradder" id="github">
						<img
							// src={`${themeState ? GitHubLight : GitHub}`}
							src={GitHubLight}
							alt="Link to GitHub"
							style={{ height: "48px", margin: "auto" }}
						/>
					</SocialChip>
				</ToolTip>
			</LinkContainer>
		</SectionContainer>
	)
})

export default Contact
