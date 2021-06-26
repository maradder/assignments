import React from "react"
import { SectionContainerStyle, textColor } from "./StyledComponents"

const SectionContainer = (props) => {
	return (
		<SectionContainerStyle id={props.id}>
			<h1
				style={{
					width: "100vw",
					margin: "24px auto 24px 24px",
					borderBottom: `1px solid' ${textColor}`,
				}}
			>
				{props.heading}
			</h1>
			<div className="sectionSubDiv">
				<div
					className="buffer"
					style={{ minWidth: "17vw", minHeight: "100%" }}
				></div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						paddingBottom: "75px",
						alignItems: "center",
					}}
				>
					{props.children}
				</div>
				<div
					className="buffer"
					style={{ minWidth: "17vw", minHeight: "100%" }}
				></div>
			</div>
		</SectionContainerStyle>
	)
}

export default SectionContainer
