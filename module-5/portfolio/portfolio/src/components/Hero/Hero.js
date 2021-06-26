import React, { useEffect, useState } from "react"
import { HeroContainer } from "../StyledComponents"
// import SectionContainer from "../SectionContainer"
const Hero = (props) => {
	const [opacity, setOpacity] = useState(0)
	const [color, setColor] = useState("transparent")

	useEffect(() => {
		// setOpacity(0)
		setTimeout(setOpacity(1), 1000)
		return () => {
			console.log("done")
		}
	}, [])
	return (
		<HeroContainer>
			{props.children}
			<div>
				<h1 opacity={opacity} color={color}>
					Marcus Radder
				</h1>
				<h3>Driven to build elegant solutions to interesting problems.</h3>
			</div>
		</HeroContainer>
	)
}

export default Hero
