import React, { useState, useContext, useEffect } from "react"
import { NavBox, List, ListItem, StyledLink } from "../StyledComponents"
import { Context } from "../../context/context"
import useToggleSlider from "../useToggleSlider"

const NavPanel = (props) => {
	const contactRef = props.thing
	const { setThemeState } = useContext(Context)
	const { toggleSliderState, ToggleSlider } = useToggleSlider()
	setThemeState(toggleSliderState)
	return (
		<NavBox>
			<ToggleSlider />
			<ul>
				<StyledLink
					activeClass=""
					to="about"
					spy={true}
					smooth={true}
					duration={1000}
				>
					<ListItem>Profile</ListItem>
				</StyledLink>
				<StyledLink
					activeClass=""
					to="experience"
					spy={true}
					smooth={true}
					duration={1000}
				>
					<ListItem>Experience</ListItem>
				</StyledLink>
				<StyledLink
					activeClass=""
					to="skills"
					spy={true}
					smooth={true}
					duration={1000}
				>
					<ListItem>Skills</ListItem>
				</StyledLink>
				<StyledLink
					activeClass=""
					to="portfolio"
					spy={true}
					smooth={true}
					duration={1000}
				>
					<ListItem>Portfolio</ListItem>
				</StyledLink>
				<StyledLink
					activeClass=""
					to="contact"
					spy={true}
					smooth={true}
					duration={1000}
				>
					<ListItem>Contact</ListItem>
				</StyledLink>
			</ul>
			<p
				style={{
					justifySelf: "flex-end",
					color: "azure",
					margin: "auto",
					fontFamily: "'Montserrat', sans-serif",
					cursor: "pointer",
					gridRow: "7/8",
				}}
				onClick={() => alert("This will have email functionality")}
			>
				marcusradder@gmail.com
			</p>
		</NavBox>
	)
}

export default NavPanel
