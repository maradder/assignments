import React, { useState, useEffect, useContext } from "react"

import {
	ContentContainer,
	ImageContainerRound,
	ProfileImage,
	SocialChip,
} from "../StyledComponents"
import SectionContainer from "../SectionContainer"
import Marcus from "./img/marcus_profile_pic.svg"
import GitHub from "./img/GitHub-Mark-64px.svg"
import GitHubLight from "./img/GitHub-Mark-Light-64px.png"
import LinkedIn from "./img/LI-In-Bug.png"
import { Link } from "react-router-dom"
import { Context } from "../../context/context"

const Profile = (props) => {
	const { themeState, setThemeState } = useContext(Context)
	const handleScroll = () => {
		console.log("scrolling")
	}

	return (
		<SectionContainer heading="About Me" id="about">
			<SocialChip
				style={{ gridRowStart: "3", gridColumnStart: "2" }}
				className="linkedIn"
				href="https://www.linkedin.com/in/marcusradder/"
			>
				<img src={`${LinkedIn}`} style={{ height: "48px", margin: "auto" }} />
			</SocialChip>
			<SocialChip
				style={{ gridRowStart: "3", gridColumnStart: "3" }}
				href="https://github.com/maradder"
				className="github"
			>
				<img
					src={`${themeState ? GitHubLight : GitHub}`}
					alt="GitHub"
					style={{ height: "48px", margin: "auto" }}
				/>
			</SocialChip>
			<ContentContainer gridcolumnstart={4} gridrowstart={4}>
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
		</SectionContainer>
	)
}

export default Profile
