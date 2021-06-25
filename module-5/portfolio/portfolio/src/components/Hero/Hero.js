import React from "react"
import SectionContainer from "../SectionContainer"

const Hero = () => {
	return (
		<SectionContainer>
			<h1
				style={{
					gridcolumn: "1/3",
					gridRow: "4/5",
					width: "900px",
					height: "120px",
					margin: "auto auto 16px 100px",
					backgroundColor: "transparent",
				}}
			>
				Marcus Radder
			</h1>
			<h3
				style={{
					gridcolumn: "1/3",
					gridRow: "5/6",
					width: "900px",
					height: "120px",
					letterSpacing: "1.28px",
					margin: "8px auto auto 100px",
					backgroundColor: "transparent",
				}}
			>
				Driven to build elegant solutions to interesting problems.
			</h3>
		</SectionContainer>
	)
}

export default Hero
