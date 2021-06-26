import React, { useContext } from "react"

import {
	ContentContainer,
	ImageContainerRound,
	ProfileImage,
	SocialChip,
	LinkContainer,
	ToolTip,
} from "../StyledComponents"
import SectionContainer from "../SectionContainer"
import Marcus from "./img/marcus_profile_pic.svg"
import GitHub from "./img/GitHub-Mark-64px.svg"
import GitHubLight from "./img/GitHub-Mark-Light-64px.png"
import LinkedIn from "./img/LI-In-Bug.png"
import { Context } from "../../context/context"

const Profile = (props) => {
	const { themeState } = useContext(Context)

	return (
		<SectionContainer
			heading="About Me"
			id="about"
			className="sectionContainer"
			style={{ flexDirection: "row" }}
		>
			<ContentContainer style={{ marginBottom: "75px" }}>
				<p style={{ width: "400px", marginBottom: "48px" }}>
					Quis elit fugiat consequat officia labore proident sint cillum minim
					nisi officia. Consequat nostrud non minim occaecat pariatur. Veniam
					culpa esse ipsum dolore eu pariatur mollit ipsum laboris elit
					excepteur est deserunt. Pariatur nostrud id exercitation eu cupidatat
					elit in velit voluptate.
				</p>
				<ImageContainerRound className="imgContainer">
					<ProfileImage src={`${Marcus}`} />
				</ImageContainerRound>
			</ContentContainer>
			<LinkContainer>
				<ToolTip content={<p className="gold">Connect with me on LinkedIn</p>}>
					<SocialChip
						className="linkedIn"
						href="https://www.linkedin.com/in/marcusradder/"
					>
						<img
							src={`${LinkedIn}`}
							style={{ height: "48px", margin: "auto" }}
							alt="LinkedIn"
						/>
					</SocialChip>
				</ToolTip>
				<ToolTip content={<p>See my code on GitHub</p>}>
					<SocialChip href="https://github.com/maradder" className="github">
						<img
							// src={`${themeState ? GitHubLight : GitHub}`}
							src={GitHubLight}
							alt="GitHub"
							style={{ height: "48px", margin: "auto" }}
						/>
					</SocialChip>
				</ToolTip>
			</LinkContainer>
		</SectionContainer>
	)
}

export default Profile
