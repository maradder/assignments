import React, { useState, useEffect } from "react"
import { ContentContainer } from "./StyledComponents"

const SocialMediaLinks = (props) => {
	return (
		<ContentContainer
			gridrowstart={props.gridrowstart}
			gridcolumnstart={props.gridcolumnstart}
		>
			LinkedIn GitHub
		</ContentContainer>
	)
}

export default SocialMediaLinks
