import React, { useState, useEffect } from "react"
import { SectionContainerStyle, textColor } from "./StyledComponents"

const SectionContainer = (props) => {
	return (
		<SectionContainerStyle id={props.id}>
			<h1
				style={{
					width: "100vw",
					gridRow: "1/2",
					margin: "24px auto 24px 24px",
					borderBottom: `1px solid' ${textColor}`,
				}}
			>
				{props.heading}
			</h1>
			{props.children}
		</SectionContainerStyle>
	)
}

export default SectionContainer
