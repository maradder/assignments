import React, { useContext } from "react"
import { HeaderNavBox, StyledLink } from "../StyledComponents"
import { Context } from "../../context/context"
import useToggleSlider from "../useToggleSlider"
import "./NavPanel.css"

const HeaderNavPanel = (props) => {
	const { setThemeState } = useContext(Context)
	const { toggleSliderState, ToggleSlider } = useToggleSlider()
	setThemeState(toggleSliderState)
	return (
		<HeaderNavBox scroll={props.scroll}>
			<ToggleSlider />
			<ul>
				<StyledLink
					activeClass=""
					to="about"
					spy={true}
					smooth={true}
					duration={1000}
				>
					<li>Profile</li>
				</StyledLink>
				<StyledLink
					activeClass=""
					to="experience"
					spy={true}
					smooth={true}
					duration={1000}
				>
					<li>Experience</li>
				</StyledLink>
				<StyledLink
					activeClass=""
					to="skills"
					spy={true}
					smooth={true}
					duration={1000}
				>
					<li>Skills</li>
				</StyledLink>
				<StyledLink
					activeClass=""
					to="portfolio"
					spy={true}
					smooth={true}
					duration={1000}
				>
					<li>Portfolio</li>
				</StyledLink>
				<StyledLink
					activeClass=""
					to="contact"
					spy={true}
					smooth={true}
					duration={1000}
				>
					<li>Contact</li>
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
		</HeaderNavBox>
	)
}

export default HeaderNavPanel
